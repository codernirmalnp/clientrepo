import {
  GET_SETTING,
  GET_SETTING_SUCCESS,
  GET_SETTING_ERROR,
  EDIT_SETTING,
  EDIT_SETTING_SUCCESS,
  EDIT_SETTING_ERROR,
  RESET_SETTING,
} from "../actions";

const INIT_STATE = {
  settingData: null,
  success: false,
  message: null,
  loading: false,
  error: null,
};

const settingReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SETTING:
      return { ...state, error: null };
    case GET_SETTING_SUCCESS:
      return {
        ...state,
        settingData: action.payload,
        error: null,
      };
    case GET_SETTING_ERROR:
      return {
        ...state,
        settingData: null,
        error: action.payload,
      };
    case EDIT_SETTING:
      return { ...state, loading: true, error: null };
    case EDIT_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case EDIT_SETTING_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case RESET_SETTING:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: null,
      };
    default:
      return { ...state };
  }
};
export default settingReducer;
