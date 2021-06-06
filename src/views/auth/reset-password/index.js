import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import {
  verifyResetToken,
  resetPassword,
  resetAuth,
} from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import InputField from "../../../components/form/input-field";
import { InputHiddenField, InputPasswordField } from "../../../components/form";
import * as Yup from "yup";
import { withTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo-light.svg";
import AuthGraphicV1 from "../graphics/auth-v1-graphic";
import { IconMail } from "../../../components/svg";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")),
      password: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          this.props.t("AUTH.VALIDATION.PASSWORD_CRITERIA")
        ),
      password_confirmation: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .oneOf(
          [Yup.ref("password"), null],
          this.props.t("AUTH.VALIDATION.NOT_MATCH")
        ),
    });
    this.props.resetAuth();
    this.props.verifyResetToken(
      this.props.match.params.token,
      this.props.history
    );
  }

  onResetPassword = (values) => {
    if (!this.props.loading) {
      this.props.resetPassword(values, this.props.history);
    }
  };

  render() {
    const { t } = this.props;
    return (
      <>
        {this.props.loading1 ? (
          <Mui.Backdrop className="loader" open={true}>
            <Mui.CircularProgress color="primary" size="24" />
          </Mui.Backdrop>
        ) : (
          <div className="auth-wrap auth-v1-style-1">
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
                  <Mui.Box className="auth-message-box">
                    <img src={Logo} alt="" />
                    <Mui.Hidden xsDown>
                      <Mui.Typography
                        component="h2"
                        variant="h2"
                        className="title mb-3 font-weight-medium"
                      >
                        {t("AUTH.RESET_PASSWORD.PASSWORD_REQUIREMENT")}
                      </Mui.Typography>
                      <Mui.Typography
                        component="h3"
                        variant="h3"
                        className="font-weight-normal"
                      >
                        {t("AUTH.RESET_PASSWORD.PASSWORD_MUST_CONTAIN")}
                      </Mui.Typography>
                      <ul className="password-requirement">
                        <li>{t("AUTH.RESET_PASSWORD.PASSWORD_CRITERIA_1")}</li>
                        <li>{t("AUTH.RESET_PASSWORD.PASSWORD_CRITERIA_2")}</li>
                        <li>{t("AUTH.RESET_PASSWORD.PASSWORD_CRITERIA_3")}</li>
                        <li>{t("AUTH.RESET_PASSWORD.PASSWORD_CRITERIA_4")}</li>
                        <li>{t("AUTH.RESET_PASSWORD.PASSWORD_CRITERIA_5")}</li>
                      </ul>
                    </Mui.Hidden>
                  </Mui.Box>
                </Mui.Grid>

                <Mui.Grid item xs={12} md>
                  <Mui.Card className="auth-card">
                    <Mui.Typography
                      className="auth-card__head"
                      variant="h1"
                      component="h1"
                    >
                      {t("AUTH.RESET_PASSWORD.TITLE")}
                    </Mui.Typography>

                    {this.props.error ? (
                      <Mui.Typography
                        className="d-block mt-2 text-center text-color-danger"
                        variant="span"
                        component="body2"
                      >
                        {this.props.error}
                      </Mui.Typography>
                    ) : null}

                    <Formik
                      initialValues={{
                        token: this.props.match.params.token,
                        email: "",
                        password: "",
                        password_confirmation: "",
                      }}
                      validationSchema={this.validationSchema}
                      onSubmit={this.onResetPassword}
                    >
                      {(props) => (
                        <Form className="default-form center">
                          <InputHiddenField name="token" />
                          <Mui.Grid container spacing={3}>
                            <Mui.Grid className="form-group" item xs={12}>
                              <InputField
                                name="email"
                                type="text"
                                label={t("AUTH.INPUT.EMAIL")}
                                InputProps={{
                                  startAdornment: (
                                    <Mui.InputAdornment position="start">
                                      <IconMail />
                                    </Mui.InputAdornment>
                                  ),
                                }}
                              />
                            </Mui.Grid>

                            <Mui.Grid className="form-group" item xs={12}>
                              <InputPasswordField
                                name="password"
                                label={t("AUTH.INPUT.NEW_PASSWORD")}
                                showStartAdornment={true}
                              />
                            </Mui.Grid>

                            <Mui.Grid className="form-group" item xs={12}>
                              <InputPasswordField
                                name="password_confirmation"
                                label={t("AUTH.INPUT.CONFIRM_PASSWORD")}
                                showStartAdornment={true}
                              />
                            </Mui.Grid>
                          </Mui.Grid>

                          <Mui.Button
                            className="btn-default align-self-start"
                            type="submit"
                            variant="contained"
                            color="primary"
                            disableElevation
                            disabled={this.props.loading}
                          >
                            {t("AUTH.GENERAL.SUBMIT_BUTTON")}
                            {this.props.loading && (
                              <Mui.CircularProgress
                                color="secondary"
                                size={24}
                              />
                            )}
                          </Mui.Button>
                        </Form>
                      )}
                    </Formik>
                  </Mui.Card>
                </Mui.Grid>
              </Mui.Grid>
            </Mui.Container>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loading1, loading, error } = auth;
  return { loading1, loading, error };
};
export default connect(mapStateToProps, {
  verifyResetToken,
  resetPassword,
  resetAuth,
})(withTranslation()(ResetPassword));
