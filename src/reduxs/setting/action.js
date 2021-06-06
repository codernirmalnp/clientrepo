export const GET_SETTING = "GET_SETTING";
export const GET_SETTING_SUCCESS = "GET_SETTING_SUCCESS";
export const GET_SETTING_ERROR = "GET_SETTING_ERROR";
export const EDIT_SETTING = "EDIT_SETTING";
export const EDIT_SETTING_SUCCESS = "EDIT_SETTING_SUCCESS";
export const EDIT_SETTING_ERROR = "EDIT_SETTING_ERROR";
export const RESET_SETTING = "RESET_SETTING";

export const getSetting = () => ({
  type: GET_SETTING,
  payload: {},
});

export const getSettingSuccess = (settingData) => ({
  type: GET_SETTING_SUCCESS,
  payload: settingData,
});

export const getSettingError = (error) => ({
  type: GET_SETTING_ERROR,
  payload: error,
});

export const editSetting = (settingData) => ({
  type: EDIT_SETTING,
  payload: { settingData },
});

export const editSettingSuccess = (success, message) => ({
  type: EDIT_SETTING_SUCCESS,
  payload: { success, message },
});

export const editSettingError = (error) => ({
  type: EDIT_SETTING_ERROR,
  payload: error,
});

export const resetSetting = () => ({
  type: RESET_SETTING,
  payload: {},
});
