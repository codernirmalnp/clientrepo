import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { forgotPassword, resetAuth } from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import { InputField } from "../../../components/form";
import * as Yup from "yup";
import { withTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo-light.svg";
import AuthGraphicV1 from "../graphics/auth-v1-graphic";
import { IconCheckAnimated } from "../../../components/svg";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")),
    });
    this.props.resetAuth();
  }

  onForgotPassword = (values) => {
    if (!this.props.loading) {
      this.props.forgotPassword(values);
    }
  };

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
                    {t("AUTH.FORGOT.DONT_WORRY")}
                  </Mui.Typography>

                  <Mui.Typography
                    component="h3"
                    variant="h3"
                    className="font-weight-normal"
                  >
                    {t("AUTH.FORGOT.HELP_RECOVER_PASSWORD")}
                  </Mui.Typography>
                </Mui.Hidden>
              </Mui.Box>
            </Mui.Grid>

            <Mui.Grid item xs={12} md>
              <Mui.Card className="auth-v1-card">
                {!this.props.loading && this.props.success ? (
                  <>
                    <IconCheckAnimated />

                    <Mui.Typography
                      className="mt-5 text-center auth-v1-card__head"
                      variant="h1"
                      component="h1"
                    >
                      {t("AUTH.FORGOT.LINK_SENT")}
                      <Mui.Typography
                        component="span"
                        variant="body1"
                        className="d-block mt-2 font-weight-normal text-color-grey"
                      >
                        {this.props.message}
                      </Mui.Typography>
                    </Mui.Typography>

                    <Mui.Box display="flex" justifyContent="center">
                      <Mui.Button
                        component={Link}
                        to={"/login"}
                        disableElevation
                        className="btn-back"
                      >
                        {t("AUTH.FORGOT.RETURN_TO_LOGIN")}
                      </Mui.Button>
                    </Mui.Box>
                  </>
                ) : (
                  <>
                    <Mui.Typography
                      className="auth-v1-card__head"
                      variant="h1"
                      component="h1"
                    >
                      {t("AUTH.FORGOT.TITLE")}

                      <Mui.Typography
                        component="span"
                        variant="body1"
                        className="d-block mt-1 font-weight-normal text-color-grey"
                      >
                        {t("AUTH.FORGOT.DESC")}
                      </Mui.Typography>
                    </Mui.Typography>

                    {this.props.error ? (
                      <Mui.Typography
                        className="d-block mt-2 text-center text-color-danger"
                        variant="body2"
                        component="span"
                      >
                        {this.props.error}
                      </Mui.Typography>
                    ) : null}

                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={this.validationSchema}
                      onSubmit={this.onForgotPassword}
                    >
                      {(props) => (
                        <Form className="default-form center">
                          <div className="form-group mb-5">
                            <InputField
                              name="email"
                              type="text"
                              label={t("AUTH.INPUT.EMAIL")}
                            />
                          </div>
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

                          <Mui.Button
                            component={Link}
                            to={"/login"}
                            disableElevation
                            className="btn-back"
                          >
                            {t("AUTH.FORGOT.RETURN_TO_LOGIN")}
                          </Mui.Button>
                        </Form>
                      )}
                    </Formik>
                  </>
                )}
              </Mui.Card>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { success, message, loading, error } = auth;
  return { success, message, loading, error };
};
export default connect(mapStateToProps, { forgotPassword, resetAuth })(
  withTranslation()(ForgotPassword)
);
