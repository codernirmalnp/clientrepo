export const GET_ALL_CONFIG_CHOICE = "GET_ALL_CONFIG_CHOICE";
export const GET_ALL_CONFIG_CHOICE_SUCCESS = "GET_ALL_CONFIG_CHOICE_SUCCESS";
export const GET_ALL_CONFIG_CHOICE_ERROR = "GET_ALL_CONFIG_CHOICE_ERROR";
export const GET_CONFIG_CHOICE_LIST = "GET_CONFIG_CHOICE_LIST";
export const GET_CONFIG_CHOICE_LIST_SUCCESS = "GET_CONFIG_CHOICE_LIST_SUCCESS";
export const GET_CONFIG_CHOICE_LIST_ERROR = "GET_CONFIG_CHOICE_LIST_ERROR";
export const ADD_CONFIG_CHOICE = "ADD_CONFIG_CHOICE";
export const ADD_CONFIG_CHOICE_SUCCESS = "ADD_CONFIG_CHOICE_SUCCESS";
export const ADD_CONFIG_CHOICE_ERROR = "ADD_CONFIG_CHOICE_ERROR";
export const GET_CONFIG_CHOICE_DATA = "GET_CONFIG_CHOICE_DATA";
export const GET_CONFIG_CHOICE_DATA_SUCCESS = "GET_CONFIG_CHOICE_DATA_SUCCESS";
export const GET_CONFIG_CHOICE_DATA_ERROR = "GET_CONFIG_CHOICE_DATA_ERROR";
export const EDIT_CONFIG_CHOICE = "EDIT_CONFIG_CHOICE";
export const EDIT_CONFIG_CHOICE_SUCCESS = "EDIT_CONFIG_CHOICE_SUCCESS";
export const EDIT_CONFIG_CHOICE_ERROR = "EDIT_CONFIG_CHOICE_ERROR";
export const DELETE_CONFIG_CHOICE = "DELETE_CONFIG_CHOICE";
export const DELETE_CONFIG_CHOICE_SUCCESS = "DELETE_CONFIG_CHOICE_SUCCESS";
export const DELETE_CONFIG_CHOICE_ERROR = "DELETE_CONFIG_CHOICE_ERROR";
export const DELETE_MULTIPLE_CONFIG_CHOICE = "DELETE_MULTIPLE_CONFIG_CHOICE";
export const DELETE_MULTIPLE_CONFIG_CHOICE_SUCCESS =
  "DELETE_MULTIPLE_CONFIG_CHOICE_SUCCESS";
export const DELETE_MULTIPLE_CONFIG_CHOICE_ERROR =
  "DELETE_MULTIPLE_CONFIG_CHOICE_ERROR";
export const RESET_CONFIG_CHOICE = "RESET_CONFIG_CHOICE";

export const getAllConfigChoice = () => ({
  type: GET_ALL_CONFIG_CHOICE,
  payload: {},
});

export const getAllConfigChoiceSuccess = (configChoices) => ({
  type: GET_ALL_CONFIG_CHOICE_SUCCESS,
  payload: configChoices,
});

export const getAllConfigChoiceError = (error) => ({
  type: GET_ALL_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const getConfigChoiceList = (dbParam) => ({
  type: GET_CONFIG_CHOICE_LIST,
  payload: { dbParam },
});

export const getConfigChoiceListSuccess = (configChoiceList) => ({
  type: GET_CONFIG_CHOICE_LIST_SUCCESS,
  payload: configChoiceList,
});

export const getConfigChoiceListError = (error) => ({
  type: GET_CONFIG_CHOICE_LIST_ERROR,
  payload: error,
});

export const addConfigChoice = (configChoiceData, history) => ({
  type: ADD_CONFIG_CHOICE,
  payload: { configChoiceData, history },
});

export const addConfigChoiceSuccess = (success, message) => ({
  type: ADD_CONFIG_CHOICE_SUCCESS,
  payload: { success, message },
});

export const addConfigChoiceError = (error) => ({
  type: ADD_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const getConfigChoiceData = (configChoiceId) => ({
  type: GET_CONFIG_CHOICE_DATA,
  payload: { configChoiceId },
});

export const getConfigChoiceDataSuccess = (configChoiceData) => ({
  type: GET_CONFIG_CHOICE_DATA_SUCCESS,
  payload: configChoiceData,
});

export const getConfigChoiceDataError = (error) => ({
  type: GET_CONFIG_CHOICE_DATA_ERROR,
  payload: error,
});

export const editConfigChoice = (
  configChoiceId,
  configChoiceData,
  history
) => ({
  type: EDIT_CONFIG_CHOICE,
  payload: { configChoiceId, configChoiceData, history },
});

export const editConfigChoiceSuccess = (success, message) => ({
  type: EDIT_CONFIG_CHOICE_SUCCESS,
  payload: { success, message },
});

export const editConfigChoiceError = (error) => ({
  type: EDIT_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const deleteConfigChoice = (configChoiceId) => ({
  type: DELETE_CONFIG_CHOICE,
  payload: { configChoiceId },
});

export const deleteConfigChoiceSuccess = (success, message) => ({
  type: DELETE_CONFIG_CHOICE_SUCCESS,
  payload: { success, message },
});

export const deleteConfigChoiceError = (error) => ({
  type: DELETE_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const deleteMultipleConfigChoice = (configChoiceIds) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE,
  payload: { configChoiceIds },
});

export const deleteMultipleConfigChoiceSuccess = (success, message) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE_SUCCESS,
  payload: { success, message },
});

export const deleteMultipleConfigChoiceError = (error) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE_ERROR,
  payload: error,
});

export const resetConfigChoice = () => ({
  type: RESET_CONFIG_CHOICE,
  payload: {},
});
