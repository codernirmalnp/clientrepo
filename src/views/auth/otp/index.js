import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { verifyOtp, resendOtp, resetAuth } from "../../../reduxs/actions";
import OtpInput from "react-otp-input";
import { withTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo-light.svg";
import AuthGraphicV1 from "../graphics/auth-v1-graphic";
class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      returnUrl: this.props.location?.state?.loginData?.returnUrl || null, // Return Url
      loginData: {
        email: this.props.location?.state?.loginData?.email || "",
        password: this.props.location?.state?.loginData?.password || "",
      },
    };
    this.props.resetAuth();
  }

  onVerify = () => {
    if (!this.props.loading && this.state.otp) {
      this.props.verifyOtp(
        { otp: this.state.otp, returnUrl: this.state.returnUrl },
        this.props.history
      );
    }
  };

  onResend = () => {
    if (!this.props.loading1) {
      this.props.resendOtp(this.state.loginData);
    }
  };

  handleChange = (otp) => this.setState({ otp });

  render() {
    const { t } = this.props;
    return (
      <div className="auth-v1-wrap auth-v1-style">
        <div className="grpahics">
          <figure className="graphic-top">
            <AuthGraphicV1 />
          </figure>

          <span className="graphic-bottom-left"></span>
          <span className="graphic-bottom-right"></span>
        </div>

        <Mui.Container className="h-100 d-flex" fixed>
          <Mui.Grid container spacing={4} justify="space-between">
            <Mui.Grid item xs={12} md={5}>
              <Mui.Box className="auth-v1-message-box">
                <img src={Logo} alt="" />
                <Mui.Hidden xsDown>
                  <Mui.Typography
                    component="h2"
                    variant="h2"
                    className="title mb-3 font-weight-medium"
                  >
                    {t("AUTH.OTP.ACCOUNT_SECURITY")}
                  </Mui.Typography>

                  <Mui.Typography
                    component="h3"
                    variant="h3"
                    className="font-weight-normal"
                  >
                    {t("AUTH.OTP.INFO")}
                  </Mui.Typography>
                </Mui.Hidden>
              </Mui.Box>
            </Mui.Grid>

            <Mui.Grid item xs={12} md>
              <Mui.Card className="auth-v1-card">
                <Mui.Typography
                  className="auth-v1-card__head"
                  variant="h1"
                  component="h1"
                >
                  {t("AUTH.OTP.TITLE")}
                  <Mui.Typography
                    component="span"
                    variant="body1"
                    className="d-block mt-1 font-weight-normal text-color-grey"
                  >
                    {t("AUTH.OTP.SUBTITLE")}
                  </Mui.Typography>
                </Mui.Typography>

                <div className="otp-ui-v1">
                  <OtpInput
                    className="otp-ui-v1__field"
                    value={this.state.otp}
                    onChange={this.handleChange}
                    numInputs={6}
                    //   separator={<span>-</span>}
                    containerStyle={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    errorStyle={{}}
                    isInputNum={true}
                    shouldAutoFocus={true}
                  />

                  {this.props.error ? (
                    <Mui.Typography
                      className="d-block mt-2 text-center text-color-danger"
                      variant="body2"
                      component="span"
                    >
                      {this.props.error}
                    </Mui.Typography>
                  ) : null}

                  <Mui.Typography
                    className="mt-3 font-weight-normal text-color-grey mb-1 text-center"
                    variant="h6"
                    component="h6"
                  >
                    {t("AUTH.OTP.NOT_RECEIVE_OTP")}
                  </Mui.Typography>

                  <Mui.Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={3}
                  >
                    <Mui.Typography
                      className="font-weight-normal text-color-primary pointer text-decoration-underline"
                      variant="h6"
                      component="h6"
                      onClick={this.onResend}
                    >
                      {t("AUTH.OTP.RESEND_CODE")}
                    </Mui.Typography>
                    {this.props.loading1 && (
                      <Mui.CircularProgress color="secondary" size={20} />
                    )}
                  </Mui.Box>
                </div>

                <Mui.Box display="flex" justifyContent="center" mt={3}>
                  <Mui.Button
                    className="btn-default"
                    type="button"
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={this.onVerify}
                    disabled={this.props.loading}
                  >
                    {t("AUTH.GENERAL.SUBMIT_BUTTON")}
                    {this.props.loading && (
                      <Mui.CircularProgress color="secondary" size={24} />
                    )}
                  </Mui.Button>
                </Mui.Box>
              </Mui.Card>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loading1, loading, error, success, message } = auth;
  return { loading1, loading, error, success, message };
};
export default connect(mapStateToProps, { verifyOtp, resendOtp, resetAuth })(
  withTranslation()(Otp)
);
