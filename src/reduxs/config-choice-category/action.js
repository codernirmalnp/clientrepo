export const GET_ALL_CONFIG_CHOICE_CATEGORY = "GET_ALL_CONFIG_CHOICE_CATEGORY";
export const GET_ALL_CONFIG_CHOICE_CATEGORY_SUCCESS = "GET_ALL_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const GET_ALL_CONFIG_CHOICE_CATEGORY_ERROR = "GET_ALL_CONFIG_CHOICE_CATEGORY_ERROR";
export const GET_CONFIG_CHOICE_CATEGORY_LIST = "GET_CONFIG_CHOICE_CATEGORY_LIST";
export const GET_CONFIG_CHOICE_CATEGORY_LIST_SUCCESS = "GET_CONFIG_CHOICE_CATEGORY_LIST_SUCCESS";
export const GET_CONFIG_CHOICE_CATEGORY_LIST_ERROR = "GET_CONFIG_CHOICE_CATEGORY_LIST_ERROR";
export const ADD_CONFIG_CHOICE_CATEGORY = "ADD_CONFIG_CHOICE_CATEGORY";
export const ADD_CONFIG_CHOICE_CATEGORY_SUCCESS = "ADD_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const ADD_CONFIG_CHOICE_CATEGORY_ERROR = "ADD_CONFIG_CHOICE_CATEGORY_ERROR";
export const GET_CONFIG_CHOICE_CATEGORY = "GET_CONFIG_CHOICE_CATEGORY";
export const GET_CONFIG_CHOICE_CATEGORY_SUCCESS = "GET_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const GET_CONFIG_CHOICE_CATEGORY_ERROR = "GET_CONFIG_CHOICE_CATEGORY_ERROR";
export const EDIT_CONFIG_CHOICE_CATEGORY = "EDIT_CONFIG_CHOICE_CATEGORY";
export const EDIT_CONFIG_CHOICE_CATEGORY_SUCCESS = "EDIT_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const EDIT_CONFIG_CHOICE_CATEGORY_ERROR = "EDIT_CONFIG_CHOICE_CATEGORY_ERROR";
export const DELETE_CONFIG_CHOICE_CATEGORY = "DELETE_CONFIG_CHOICE_CATEGORY";
export const DELETE_CONFIG_CHOICE_CATEGORY_SUCCESS = "DELETE_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const DELETE_CONFIG_CHOICE_CATEGORY_ERROR = "DELETE_CONFIG_CHOICE_CATEGORY_ERROR";
export const DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY = "DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY";
export const DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_SUCCESS =
  "DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_SUCCESS";
export const DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_ERROR =
  "DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_ERROR";
export const RESET_CONFIG_CHOICE_CATEGORY = "RESET_CONFIG_CHOICE_CATEGORY";

export const getAllConfigChoiceCategory = () => ({
  type: GET_ALL_CONFIG_CHOICE_CATEGORY,
  payload: {},
});

export const getAllConfigChoiceCategorySuccess = (configChoiceCategories) => ({
  type: GET_ALL_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: configChoiceCategories,
});

export const getAllConfigChoiceCategoryError = (error) => ({
  type: GET_ALL_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const getConfigChoiceCategoryList = (dbParam) => ({
  type: GET_CONFIG_CHOICE_CATEGORY_LIST,
  payload: { dbParam },
});

export const getConfigChoiceCategoryListSuccess = (configChoiceCategoryList) => ({
  type: GET_CONFIG_CHOICE_CATEGORY_LIST_SUCCESS,
  payload: configChoiceCategoryList,
});

export const getConfigChoiceCategoryListError = (error) => ({
  type: GET_CONFIG_CHOICE_CATEGORY_LIST_ERROR,
  payload: error,
});

export const addConfigChoiceCategory = (configChoiceCategoryData, history) => ({
  type: ADD_CONFIG_CHOICE_CATEGORY,
  payload: { configChoiceCategoryData, history },
});

export const addConfigChoiceCategorySuccess = (success, message) => ({
  type: ADD_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: { success, message },
});

export const addConfigChoiceCategoryError = (error) => ({
  type: ADD_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const getConfigChoiceCategory = (configChoiceCategoryId) => ({
  type: GET_CONFIG_CHOICE_CATEGORY,
  payload: { configChoiceCategoryId },
});

export const getConfigChoiceCategorySuccess = (configChoiceCategoryData) => ({
  type: GET_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: configChoiceCategoryData,
});

export const getConfigChoiceCategoryError = (error) => ({
  type: GET_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const editConfigChoiceCategory = (
  configChoiceCategoryId,
  configChoiceCategoryData,
  history
) => ({
  type: EDIT_CONFIG_CHOICE_CATEGORY,
  payload: { configChoiceCategoryId, configChoiceCategoryData, history },
});

export const editConfigChoiceCategorySuccess = (success, message) => ({
  type: EDIT_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: { success, message },
});

export const editConfigChoiceCategoryError = (error) => ({
  type: EDIT_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const deleteConfigChoiceCategory = (configChoiceCategoryId) => ({
  type: DELETE_CONFIG_CHOICE_CATEGORY,
  payload: { configChoiceCategoryId },
});

export const deleteConfigChoiceCategorySuccess = (success, message) => ({
  type: DELETE_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: { success, message },
});

export const deleteConfigChoiceCategoryError = (error) => ({
  type: DELETE_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const deleteMultipleConfigChoiceCategory = (configChoiceCategoryIds) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY,
  payload: { configChoiceCategoryIds },
});

export const deleteMultipleConfigChoiceCategorySuccess = (success, message) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_SUCCESS,
  payload: { success, message },
});

export const deleteMultipleConfigChoiceCategoryError = (error) => ({
  type: DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_ERROR,
  payload: error,
});

export const resetConfigChoiceCategory = () => ({
  type: RESET_CONFIG_CHOICE_CATEGORY,
  payload: {},
});
