export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_ERROR = "GET_CURRENT_USER_ERROR";
export const GET_PERMISSION = "GET_PERMISSION";
export const GET_PERMISSION_SUCCESS = "GET_PERMISSION_SUCCESS";
export const GET_PERMISSION_ERROR = "GET_PERMISSION_ERROR";
export const GET_COUNTRY_LIST = "GET_COUNTRY_LIST";
export const GET_COUNTRY_LIST_SUCCESS = "GET_COUNTRY_LIST_SUCCESS";
export const GET_COUNTRY_LIST_ERROR = "GET_COUNTRY_LIST_ERROR";
export const GET_CONFIG_CHOICE = "GET_CONFIG_CHOICE";
export const GET_CONFIG_CHOICE_SUCCESS = "GET_CONFIG_CHOICE_SUCCESS";
export const GET_CONFIG_CHOICE_ERROR = "GET_CONFIG_CHOICE_ERROR";
export const GET_MULTIPLE_CONFIG_CHOICE = "GET_MULTIPLE_CONFIG_CHOICE";
export const GET_MULTIPLE_CONFIG_CHOICE_SUCCESS =
  "GET_MULTIPLE_CONFIG_CHOICE_SUCCESS";
export const GET_MULTIPLE_CONFIG_CHOICE_ERROR =
  "GET_MULTIPLE_CONFIG_CHOICE_ERROR";

export const getCurrentUser = () => {
  return {
    type: GET_CURRENT_USER,
    payload: {},
  };
};

export const getCurrentUserSuccess = (currentUserData) => {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload: currentUserData,
  };
};

export const getCurrentUserError = (error) => {
  return {
    type: GET_CURRENT_USER_ERROR,
    payload: error,
  };
};

export const getPermission = () => {
  return {
    type: GET_PERMISSION,
    payload: {},
  };
};

export const getPermissionSuccess = (permission) => {
  return {
    type: GET_PERMISSION_SUCCESS,
    payload: permission,
  };
};

export const getPermissionError = (error) => {
  return {
    type: GET_PERMISSION_ERROR,
    payload: error,
  };
};

export const getCountryList = () => ({
  type: GET_COUNTRY_LIST,
  payload: {},
});

export const getCountryListSuccess = (countryList) => ({
  type: GET_COUNTRY_LIST_SUCCESS,
  payload: countryList,
});

export const getCountryListError = (error) => ({
  type: GET_COUNTRY_LIST_ERROR,
  payload: error,
});

export const getConfigChoice = (category) => ({
  type: GET_CONFIG_CHOICE,
  payload: { category },
});

export const getConfigChoiceSuccess = (choiceList) => ({
  type: GET_CONFIG_CHOICE_SUCCESS,
  payload: choiceList,
});

export const getConfigChoiceError = (error) => ({
  type: GET_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const getMultipleConfigChoice = (categories) => ({
  type: GET_MULTIPLE_CONFIG_CHOICE,
  payload: { categories },
});

export const getMultipleConfigChoiceSuccess = (multipleChoiceList) => ({
  type: GET_MULTIPLE_CONFIG_CHOICE_SUCCESS,
  payload: multipleChoiceList,
});

export const getMultipleConfigChoiceError = (error) => ({
  type: GET_MULTIPLE_CONFIG_CHOICE_ERROR,
  payload: error,
});
