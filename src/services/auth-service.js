import Req from "../interceptors/token-interceptor";
import AuthReq from "../interceptors/auth-interceptor";

const AuthService = (function () {
  function _verifyUser(token) {
    return AuthReq.get(`/api/users/verify/${token}`);
  }

  function _login(data) {
    return AuthReq.post("/api/login", data);
  }

  function _verifyOtp(data) {
    return AuthReq.post(`/api/verify/otp`, { otp: data.otp });
  }

  function _resendOtp(data) {
    return AuthReq.post(`/api/resend/otp/`, data);
  }

  function _initialChangePassword(data) {
    return AuthReq.post("/api/initialChangePassword", data);
  }

  function _forgotPassword(data) {
    return AuthReq.post("/api/forgotPassword", data);
  }

  function _verifyResetToken(token) {
    return AuthReq.get(`/api/verify/resetToken/${token}`);
  }

  function _resetPassword(data) {
    return AuthReq.post("/api/resetPassword", data);
  }

  function _verifyEmail(token) {
    return AuthReq.get(`/api/users/verifyEmail/${token}`);
  }

  function _logout() {
    return Req.get("/api/logout");
  }

  return {
    verifyUser: _verifyUser,
    login: _login,
    verifyOtp: _verifyOtp,
    resendOtp: _resendOtp,
    initialChangePassword: _initialChangePassword,
    forgotPassword: _forgotPassword,
    verifyResetToken: _verifyResetToken,
    resetPassword: _resetPassword,
    verifyEmail: _verifyEmail,
    logout: _logout,
  };
})();
export default AuthService;
