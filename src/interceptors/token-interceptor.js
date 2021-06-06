import axios from "axios";

// Create axios request
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default request;

// Add a request interceptor
request.interceptors.request.use(
  async function (config) {
    // Add authorization headers before request is sent
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    config.headers["Content-Language"] = localStorage.getItem("i18nextLng");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      return resetTokenAndReattemptRequest(error);
    }

    // If the error is due to other reasons, we just throw it back to axios
    return Promise.reject(error);
  }
);

let isAlreadyFetchingAccessToken = false;
// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];
async function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorResponse } = error;
    // Get expired token
    const resetToken = localStorage.getItem("token");
    if (!resetToken) {
      // We can't refresh, throw the error anyway
      return Promise.reject(error);
    }
    /* Proceed to the token refresh procedure
    We create a new Promise that will retry the request,
    clone all the request configuration from the failed
    request in the error object. */
    const retryOriginalRequest = new Promise((resolve) => {
      /* We need to add the request retry to the queue
    since there another request that already attempt to
    refresh the token */
      addSubscriber((token) => {
        errorResponse.config.headers.Authorization = "Bearer " + token;
        resolve(axios(errorResponse.config));
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "/api/getRefreshToken",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + resetToken,
        },
      });
      if (!response.data) {
        return Promise.reject(error);
      }
      // Save new token
      localStorage.setItem("token", response.data.data.refreshToken);
      isAlreadyFetchingAccessToken = false;
      onAccessTokenFetched(response.data.data.refreshToken);
    }
    return retryOriginalRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

function onAccessTokenFetched(token) {
  // When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}
