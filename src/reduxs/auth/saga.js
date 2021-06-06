import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import AuthService from "../../services/auth-service";
import {
  VERIFY_USER,
  LOGIN,
  VERIFY_OTP,
  RESEND_OTP,
  INITIAL_CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  VERIFY_RESET_TOKEN,
  RESET_PASSWORD,
  VERIFY_EMAIL,
  LOGOUT,
} from "../actions";
import {
  verifyUserSuccess,
  verifyUserError,
  loginSuccess,
  loginError,
  verifyOtpSuccess,
  verifyOtpError,
  resendOtpSuccess,
  resendOtpError,
  initialChangePasswordSuccess,
  initialChangePasswordError,
  forgotPasswordSuccess,
  forgotPasswordError,
  verifyResetTokenSuccess,
  verifyResetTokenError,
  resetPasswordSuccess,
  resetPasswordError,
  verifyEmailSuccess,
  verifyEmailError,
  logoutSuccess,
  logoutError,
} from "./action";
import { parseMessage } from "../../helpers/util";

export function* watchVerifyUser() {
  yield takeEvery(VERIFY_USER, verifyUser);
}

const verifyUserAsync = async (token) => {
  return AuthService.verifyUser(token);
};

function* verifyUser({ payload }) {
  try {
    const response = yield call(verifyUserAsync, payload.token);
    if (response.data.success) {
      yield put(
        verifyUserSuccess(response.data.success, response.data.message)
      );
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
    } else {
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
      yield put(verifyUserError(response.data.message));
    }
  } catch (error) {
    payload.history.push({
      pathname: "/login",
      state: {
        responseMsg: parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        ),
      },
    });
    yield put(
      verifyUserError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}

const loginAsync = async (data) => {
  return AuthService.login(data);
};

function* login({ payload }) {
  try {
    const response = yield call(loginAsync, payload.loginData);
    if (response.data.success) {
      yield put(loginSuccess(response.data.success, response.data.message));
      if (payload.loginData.remember === 1) {
        localStorage.setItem("email", payload.loginData.email);
        localStorage.setItem("password", payload.loginData.password);
        localStorage.setItem("remember", payload.loginData.remember);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("remember");
      }
      if (response.data.data.isFirstTimeLogin) {
        payload.history.push({
          pathname: "/initial-change-password",
          state: { userId: response.data.data.userId },
        });
      } else {
        payload.history.push({
          pathname: "/otp",
          state: { loginData: payload.loginData },
        });
      }
    } else {
      yield put(loginError(response.data.message));
    }
  } catch (error) {
    yield put(
      loginError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (data) => {
  return AuthService.forgotPassword(data);
};

function* forgotPassword({ payload }) {
  try {
    const response = yield call(
      forgotPasswordAsync,
      payload.forgotPasswordData
    );
    if (response.data.success) {
      yield put(
        forgotPasswordSuccess(response.data.success, response.data.message)
      );
    } else {
      yield put(forgotPasswordError(response.data.message));
    }
  } catch (error) {
    yield put(
      forgotPasswordError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchVerifyResetToken() {
  yield takeEvery(VERIFY_RESET_TOKEN, verifyResetToken);
}

const verifyResetTokenAsync = async (token) => {
  return AuthService.verifyResetToken(token);
};

function* verifyResetToken({ payload }) {
  try {
    const response = yield call(verifyResetTokenAsync, payload.token);
    if (response.data.success) {
      yield put(
        verifyResetTokenSuccess(response.data.success, response.data.message)
      );
    } else {
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
      yield put(verifyResetTokenError(response.data.message));
    }
  } catch (error) {
    payload.history.push({
      pathname: "/login",
      state: {
        responseMsg: parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        ),
      },
    });
    yield put(
      verifyResetTokenError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchResetPassword() {
  yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (data) => {
  return AuthService.resetPassword(data);
};

function* resetPassword({ payload }) {
  try {
    const response = yield call(resetPasswordAsync, payload.resetPasswordData);
    if (response.data.success) {
      yield put(
        resetPasswordSuccess(response.data.success, response.data.message)
      );
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
    } else {
      yield put(resetPasswordError(response.data.message));
    }
  } catch (error) {
    yield put(
      resetPasswordError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchInitialChangePassword() {
  yield takeEvery(INITIAL_CHANGE_PASSWORD, initialChangePassword);
}

const initialChangePasswordAsync = async (data) => {
  return AuthService.initialChangePassword(data);
};

function* initialChangePassword({ payload }) {
  try {
    const response = yield call(
      initialChangePasswordAsync,
      payload.initialChangePasswordData
    );
    if (response.data.success) {
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.data.token);
      yield put(initialChangePasswordSuccess(response.data.data));
      payload.history.push("/");
    } else {
      yield put(initialChangePasswordError(response.data.message));
    }
  } catch (error) {
    yield put(
      initialChangePasswordError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchVerifyOtp() {
  yield takeEvery(VERIFY_OTP, verifyOtp);
}

const verifyOtpAsync = async (data) => {
  return AuthService.verifyOtp(data);
};

function* verifyOtp({ payload }) {
  try {
    const response = yield call(verifyOtpAsync, payload.otpData);
    if (response.data.success) {
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.data.token);
      yield put(verifyOtpSuccess(response.data.data));
      payload.otpData.returnUrl
        ? payload.history.push(payload.otpData.returnUrl)
        : payload.history.push("/");
    } else {
      yield put(verifyOtpError(response.data.message));
    }
  } catch (error) {
    yield put(
      verifyOtpError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchResendOtp() {
  yield takeEvery(RESEND_OTP, resendOtp);
}

const resendOtpAsync = async (data) => {
  return AuthService.resendOtp(data);
};

function* resendOtp({ payload }) {
  try {
    const response = yield call(resendOtpAsync, payload.loginData);
    if (response.data.success) {
      yield put(resendOtpSuccess(response.data.success, response.data.message));
    } else {
      yield put(resendOtpError(response.data.message));
    }
  } catch (error) {
    yield put(
      resendOtpError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchVerifyEmail() {
  yield takeEvery(VERIFY_EMAIL, verifyEmail);
}

const verifyEmailAsync = async (token) => {
  return AuthService.verifyEmail(token);
};

function* verifyEmail({ payload }) {
  try {
    const response = yield call(verifyEmailAsync, payload.token);
    if (response.data.success) {
      yield put(
        verifyEmailSuccess(response.data.success, response.data.message)
      );
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
    } else {
      payload.history.push({
        pathname: "/login",
        state: { responseMsg: response.data.message },
      });
      yield put(verifyEmailError(response.data.message));
    }
  } catch (error) {
    payload.history.push({
      pathname: "/login",
      state: {
        responseMsg: parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        ),
      },
    });
    yield put(
      verifyEmailError(
        parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )
      )
    );
  }
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

const logoutAsync = async () => {
  return AuthService.logout();
};

function* logout({ payload }) {
  try {
    const response = yield call(logoutAsync);
    if (response.data.success) {
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
      payload.history.push("/login");
      yield put(logoutSuccess(response.data.success, response.data.message));
    } else {
      payload.history.push("/login");
      yield put(logoutError(response.data.message));
    }
  } catch (error) {
    payload.history.push("/login");
    yield put(logoutError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchVerifyUser),
    fork(watchLogin),
    fork(watchVerifyOtp),
    fork(watchResendOtp),
    fork(watchInitialChangePassword),
    fork(watchForgotPassword),
    fork(watchVerifyResetToken),
    fork(watchResetPassword),
    fork(watchVerifyEmail),
    fork(watchLogout),
  ]);
}
