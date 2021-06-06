import {
  VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_ERROR,
  RESEND_OTP,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_ERROR,
  INITIAL_CHANGE_PASSWORD,
  INITIAL_CHANGE_PASSWORD_SUCCESS,
  INITIAL_CHANGE_PASSWORD_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  VERIFY_RESET_TOKEN,
  VERIFY_RESET_TOKEN_SUCCESS,
  VERIFY_RESET_TOKEN_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_AUTH,
} from "../actions";

const INIT_STATE = {
  initialChangePasswordData: null,
  forgotPasswordData: null,
  resetPasswordData: null,
  loginData: null,
  otpData: null,
  token: null,
  user: JSON.parse(localStorage.getItem("currentUser")),
  success: false,
  message: null,
  loading: false,
  loading1: false,
  error: null,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return { ...state, error: null };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case VERIFY_USER_ERROR:
      return {
        ...state,
        success: false,
        message: null,
        error: action.payload,
      };
    case LOGIN:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case VERIFY_OTP:
      return { ...state, loading: true, error: null };
    case VERIFY_OTP_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case VERIFY_OTP_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case RESEND_OTP:
      return { ...state, loading1: true, error: null };
    case RESEND_OTP_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case RESEND_OTP_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case INITIAL_CHANGE_PASSWORD:
      return { ...state, loading: true, error: null };
    case INITIAL_CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case INITIAL_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: null };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case VERIFY_RESET_TOKEN:
      return { ...state, loading1: true, error: null };
    case VERIFY_RESET_TOKEN_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case VERIFY_RESET_TOKEN_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: null };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case VERIFY_EMAIL:
      return { ...state, error: null };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case VERIFY_EMAIL_ERROR:
      return {
        ...state,
        success: false,
        message: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_AUTH:
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
export default authReducer;
