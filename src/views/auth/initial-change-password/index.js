import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { initialChangePassword, resetAuth } from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import { InputHiddenField, InputPasswordField } from "../../../components/form";
import * as Yup from "yup";
import { withTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo-light.svg";
import AuthGraphicV1 from "../graphics/auth-v1-graphic";
class InitialChangePassword extends Component {
  constructor(props) {
    super(props);
    this.validationSchema = Yup.object().shape({
      old_password: Yup.string().required(
        this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")
      ),
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
  }

  onSubmit = (values) => {
    if (!this.props.loading) {
      this.props.initialChangePassword(values, this.props.history);
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
                    {t("AUTH.INITIAL_CHANGE_PASSWORD.SETUP")}
                  </Mui.Typography>

                  <Mui.Typography
                    component="h3"
                    variant="h3"
                    className="font-weight-normal"
                  >
                    {t("AUTH.INITIAL_CHANGE_PASSWORD.INFO")}
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
                  {t("AUTH.INITIAL_CHANGE_PASSWORD.TITLE")}
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
                  initialValues={{
                    userId: this.props.location?.state?.userId || "",
                    old_password: "",
                    password: "",
                    password_confirmation: "",
                  }}
                  validationSchema={this.validationSchema}
                  onSubmit={this.onSubmit}
                >
                  {(props) => (
                    <Form className="default-form center">
                      <InputHiddenField name="userId" />
                      <Mui.Grid container spacing={3}>
                        <Mui.Grid className="form-group" item xs={12}>
                          <InputPasswordField
                            name="old_password"
                            label={t("AUTH.INPUT.OLD_PASSWORD")}
                            showStartAdornment={true}
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
                          <Mui.CircularProgress color="secondary" size={24} />
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
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { success, message, loading, error } = auth;
  return { success, message, loading, error };
};
export default connect(mapStateToProps, {
  initialChangePassword,
  resetAuth,
})(withTranslation()(InitialChangePassword));
