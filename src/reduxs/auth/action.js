export const VERIFY_USER = "VERIFY_USER";
export const VERIFY_USER_SUCCESS = "VERIFY_USER_SUCCESS";
export const VERIFY_USER_ERROR = "VERIFY_USER_ERROR";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const VERIFY_OTP = "VERIFY_OTP";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_ERROR = "VERIFY_OTP_ERROR";
export const RESEND_OTP = "RESEND_OTP";
export const RESEND_OTP_SUCCESS = "RESEND_OTP_SUCCESS";
export const RESEND_OTP_ERROR = "RESEND_OTP_ERROR";
export const INITIAL_CHANGE_PASSWORD = "INITIAL_CHANGE_PASSWORD";
export const INITIAL_CHANGE_PASSWORD_SUCCESS =
  "INITIAL_CHANGE_PASSWORD_SUCCESS";
export const INITIAL_CHANGE_PASSWORD_ERROR = "INITIAL_CHANGE_PASSWORD_ERROR";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const VERIFY_RESET_TOKEN = "VERIFY_RESET_TOKEN";
export const VERIFY_RESET_TOKEN_SUCCESS = "VERIFY_RESET_TOKEN_SUCCESS";
export const VERIFY_RESET_TOKEN_ERROR = "VERIFY_RESET_TOKEN_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESSf";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const VERIFY_EMAIL = "VERIFY_EMAIL";
export const VERIFY_EMAIL_SUCCESS = "VERIFY_EMAIL_SUCCESS";
export const VERIFY_EMAIL_ERROR = "VERIFY_EMAIL_ERROR";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const RESET_AUTH = "RESET_AUTH";

export const verifyUser = (token, history) => ({
  type: VERIFY_USER,
  payload: { token, history },
});

export const verifyUserSuccess = (success, message) => ({
  type: VERIFY_USER_SUCCESS,
  payload: { success, message },
});

export const verifyUserError = (error) => ({
  type: VERIFY_USER_ERROR,
  payload: error,
});

export const login = (loginData, history) => ({
  type: LOGIN,
  payload: { loginData, history },
});

export const loginSuccess = (success, message) => ({
  type: LOGIN_SUCCESS,
  payload: { success, message },
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const verifyOtp = (otpData, history) => ({
  type: VERIFY_OTP,
  payload: { otpData, history },
});

export const verifyOtpSuccess = (user) => ({
  type: VERIFY_OTP_SUCCESS,
  payload: user,
});

export const verifyOtpError = (error) => ({
  type: VERIFY_OTP_ERROR,
  payload: error,
});

export const resendOtp = (loginData) => ({
  type: RESEND_OTP,
  payload: { loginData },
});

export const resendOtpSuccess = (success, message) => ({
  type: RESEND_OTP_SUCCESS,
  payload: { success, message },
});

export const resendOtpError = (error) => ({
  type: RESEND_OTP_ERROR,
  payload: error,
});

export const initialChangePassword = (initialChangePasswordData, history) => ({
  type: INITIAL_CHANGE_PASSWORD,
  payload: { initialChangePasswordData, history },
});

export const initialChangePasswordSuccess = (user) => ({
  type: INITIAL_CHANGE_PASSWORD_SUCCESS,
  payload: user,
});

export const initialChangePasswordError = (error) => ({
  type: INITIAL_CHANGE_PASSWORD_ERROR,
  payload: error,
});

export const forgotPassword = (forgotPasswordData) => ({
  type: FORGOT_PASSWORD,
  payload: { forgotPasswordData },
});

export const forgotPasswordSuccess = (success, message) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: { success, message },
});

export const forgotPasswordError = (error) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: error,
});

export const verifyResetToken = (token, history) => ({
  type: VERIFY_RESET_TOKEN,
  payload: { token, history },
});

export const verifyResetTokenSuccess = (success, message) => ({
  type: VERIFY_RESET_TOKEN_SUCCESS,
  payload: { success, message },
});

export const verifyResetTokenError = (error) => ({
  type: VERIFY_RESET_TOKEN_ERROR,
  payload: error,
});

export const resetPassword = (resetPasswordData, history) => ({
  type: RESET_PASSWORD,
  payload: { resetPasswordData, history },
});

export const resetPasswordSuccess = (success, message) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: { success, message },
});

export const resetPasswordError = (error) => ({
  type: RESET_PASSWORD_ERROR,
  payload: error,
});

export const verifyEmail = (token, history) => ({
  type: VERIFY_EMAIL,
  payload: { token, history },
});

export const verifyEmailSuccess = (success, message) => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload: { success, message },
});

export const verifyEmailError = (error) => ({
  type: VERIFY_EMAIL_ERROR,
  payload: error,
});

export const logout = (history) => ({
  type: LOGOUT,
  payload: { history },
});

export const logoutSuccess = (success, message) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: { success, message },
  };
};

export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: error,
  };
};

export const resetAuth = () => ({
  type: RESET_AUTH,
  payload: {},
});
