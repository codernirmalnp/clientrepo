import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { login, resetAuth } from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import { InputField, InputPasswordField } from "../../../components/form";
import * as Yup from "yup";
import { withTranslation } from "react-i18next";
import Logo from "../../../assets/images/logo-light.svg";
import AuthGraphicV2 from "../graphics/auth-v2-graphic";
class Login extends Component {
  constructor(props) {
    super(props);
    // Redirect To App dashboard if User Token Available
    // if (localStorage.getItem("token")) {
    //   this.props.history.push("/");
    // }

    // Return Url
    this.returnUrl = this.props.location?.state?.returnUrl || null;
    // Success/error message
    this.responseMsg = this.props.location?.state?.responseMsg || "";
    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")),
      password: Yup.string().required(
        this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")
      ),
    });
    this.props.resetAuth();
  }

  onLogin = (values) => {
    if (!this.props.loading) {
      this.props.login(values, this.props.history);
    }
  };

  render() {
    const { t } = this.props;
    return (
      <div className="auth-v2-wrap auth-v2-style">
       

        <Mui.Container className="h-100 d-flex" fixed>
          <Mui.Grid container spacing={4} justify="space-between">
            <Mui.Grid item xs={12} md>
              <Mui.Card className="auth-v2-card">
                <Mui.Typography
                  className="auth-v2-card__head"
                  variant="h1"
                  component="h1"
                >
                  <span className="text-color-primary">Howdy</span> !!!
                  <Mui.Typography
                    component="span"
                    variant="body1"
                    className="mt-2 d-block"
                  >
                    please login to your account
                  </Mui.Typography>
                  <Mui.Divider
                    className="mt-1 background-color-primary"
                    style={{ width: 46, height: 5 }}
                  />
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

                {/* Success/error message while navigation */}
                {this.responseMsg && !this.props.error ? (
                  <Mui.Typography
                    className="d-block mt-2 text-center text-color-primary"
                    component="span"
                    variant="body2"
                  >
                    {this.responseMsg}
                  </Mui.Typography>
                ) : null}

                <Formik
                  initialValues={{
                    email: localStorage.getItem("email")
                      ? localStorage.getItem("email")
                      : "",
                    password: localStorage.getItem("password")
                      ? localStorage.getItem("password")
                      : "",
                    remember: localStorage.getItem("remember")
                      ? parseInt(localStorage.getItem("remember"))
                      : 0,
                    returnUrl: this.returnUrl,
                  }}
                  validationSchema={this.validationSchema}
                  onSubmit={this.onLogin}
                >
                  {(props) => (
                    <Form className="default-form center">
                      <Mui.Grid container spacing={3}>
                        <Mui.Grid className="form-group style-v2" item xs={12}>
                          <InputField
                            name="email"
                            type="text"
                            label={t("AUTH.INPUT.EMAIL")}
                            placeholder="Enter your username"
                          />
                        </Mui.Grid>

                        <Mui.Grid
                          className="form-group style-v2 mb-2"
                          item
                          xs={12}
                        >
                          <InputPasswordField
                            name="password"
                            label={t("AUTH.INPUT.PASSWORD")}
                            placeholder="Enter your password"
                          />
                        </Mui.Grid>
                      </Mui.Grid>

                      <Mui.Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={3}
                      >
                        <Mui.Grid item xs={12} sm={6}>
                          <Mui.FormControlLabel
                            control={
                              <Mui.Checkbox
                                color="primary"
                                checked={props.values.remember === 1}
                                onChange={(event) =>
                                  props.setFieldValue(
                                    "remember",
                                    event.target.checked ? 1 : 0
                                  )
                                }
                              />
                            }
                            label={t("AUTH.GENERAL.REMEMBER_ME")}
                          />
                        </Mui.Grid>
                        <Mui.Grid
                          item
                          xs={12}
                          sm={6}
                          className={
                            Mui.isWidthDown("xs", this.props.width)
                              ? "mt-2"
                              : "text-right"
                          }
                        >
                          <NavLink
                            to={`/forgot-password`}
                            className="text-color-primary font-weight-medium"
                          >
                            {t("AUTH.GENERAL.FORGOT_BUTTON")}
                          </NavLink>
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
                        {t("AUTH.LOGIN.BUTTON")}
                        {this.props.loading && (
                          <Mui.CircularProgress color="secondary" size={24} />
                        )}
                      </Mui.Button>
                    </Form>
                  )}
                </Formik>
              </Mui.Card>
            </Mui.Grid>

            <Mui.Grid item xs={12} md={5}>
              <Mui.Box className="auth-v2-message-box">
                <img src={Logo} alt="" />

                <Mui.Hidden xsDown>
                  <Mui.Typography
                    component="h2"
                    variant="h2"
                    className="title mb-3 font-weight-medium"
                  >
                    {t("AUTH.LOGIN.WELCOME_BACK")}
                  </Mui.Typography>

                  <Mui.Typography
                    component="h3"
                    variant="h3"
                    className="font-weight-normal"
                  >
                    {t("AUTH.LOGIN.INFO")}
                  </Mui.Typography>
                </Mui.Hidden>
              </Mui.Box>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user, loading, error } = auth;
  return { user, loading, error };
};
export default connect(mapStateToProps, { login, resetAuth })(
  withTranslation()(Mui.withWidth()(Login))
);
