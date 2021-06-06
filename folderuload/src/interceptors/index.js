
import axios from 'axios'
const axiosApiInstance=axios.create()
axiosApiInstance.interceptors.request.use(
    async config => {
      return config;
    },
    error => {
      Promise.reject(error)
  });

  axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();            
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  });

  const refreshAccessToken=()=>axios.get('http://localhost:3001/api/v1/auth/refreshToken')
  export default axiosApiInstance;