import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { changePassword } from "../../../reduxs/actions";
import { InputPasswordField } from "../../../components/form";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IconKey } from "../../../components/svg";
class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.schema = Yup.object().shape({
      oldPassword: Yup.string().required(
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
  }

  onSubmit = (values) => {
    if (!this.props.loading) {
      this.props.changePassword(values);
    }
  };

  render() {
    const { t, i18n } = this.props;
    return (
      <Formik
        enableReinitialize={true}
        initialValues={{
          oldPassword: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={this.schema}
        onSubmit={this.onSubmit}
      >
        {(props) => (
          <Form className="default-form">
            <figure className="user-profile__img">
              <Mui.Avatar
                alt={this.props.userData?.fullname || ""}
                src={
                  this.props.userData?.photo?.length > 0 &&
                  this.props.userData?.photo[0]?.url
                    ? this.props.userData?.photo[0]?.url
                    : "/static/images/avatar/1.jpg"
                }
              />
            </figure>

            <Mui.Box
              display="flex"
              flexDirection="column"
              className="profile-field name"
            >
              <Mui.Box
                display="flex"
                component="h3"
                alignItems="center"
                className="ml-4 mb-2 font-weight-semi-bold name-text"
              >
                {this.props.userData?.fullname || ""}
              </Mui.Box>

              <Mui.Typography
                className="d-block font-weight-normal text-color-primary"
                component="span"
                variant="h5"
              >
                {this.props.userData?.role?.name?.[i18n.language] || ""}
              </Mui.Typography>
            </Mui.Box>

            <Mui.Typography
              component="h4"
              variant="subtitle2"
              className="mb-1 font-weight-medium"
            >
              {t("PROFILE.CHANGE_PASSWORD")}
            </Mui.Typography>
            <Mui.Typography
              component="p"
              variant="body1"
              className="mb-4 text-color-grey-light"
            >
              {t("PROFILE.CHANGE_PASSWORD_INFO_LABEL")}
            </Mui.Typography>

            <Mui.Box
              display="flex"
              flexDirection="column"
              className="profile-field no-bg"
            >
              <Mui.Typography component="label" variant="body1">
                <IconKey />
                {t("AUTH.INPUT.OLD_PASSWORD")}
              </Mui.Typography>
              <InputPasswordField
                variant="filled"
                name="oldPassword"
                label=""
              />
            </Mui.Box>

            <Mui.Box
              display="flex"
              flexDirection="column"
              className="profile-field no-bg"
            >
              <Mui.Typography component="label" variant="body1">
                <IconKey />
                {t("AUTH.INPUT.NEW_PASSWORD")}
              </Mui.Typography>
              <InputPasswordField variant="filled" name="password" label="" />
            </Mui.Box>

            <Mui.Box
              display="flex"
              flexDirection="column"
              className="profile-field no-bg"
            >
              <Mui.Typography component="label" variant="body1">
                <IconKey />
                {t("AUTH.INPUT.CONFIRM_PASSWORD")}
              </Mui.Typography>
              <InputPasswordField
                variant="filled"
                name="password_confirmation"
                label=""
              />
            </Mui.Box>

            <Mui.Divider light={true} className="mt-3 mb-4" />

            <Mui.Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              flexDirection={
                Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
              }
              alignItems={
                Mui.isWidthDown("xs", this.props.width) ? "strech" : "center"
              }
            >
              <Mui.Button
                className={`btn-default ${
                  Mui.isWidthDown("xs", this.props.width) ? "mb-3" : "mr-3"
                }`}
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
                disabled={this.props.loading}
              >
                {t("PROFILE.CHANGE_PASSWORD")}
                {this.props.loading && (
                  <Mui.CircularProgress color="secondary" size={24} />
                )}
              </Mui.Button>

              <Mui.Button
                className={`btn-default ${
                  Mui.isWidthDown("xs", this.props.width) ? "mb-3" : "mr-3"
                }`}
                color="primary"
                type="button"
                variant="outlined"
                disableElevation
                onClick={this.props.reset}
              >
                {t("COMMON.BUTTON.CANCEL")}
              </Mui.Button>

              <Mui.Button
                className="mt-2 font-weight-normal text-transform-capitalize"
                type="button"
                variant="outlined"
                disableElevation
                onClick={props.resetForm}
              >
                {t("COMMON.BUTTON.RESET")}
              </Mui.Button>
            </Mui.Box>
          </Form>
        )}
      </Formik>
    );
  }
}
const mapStateToProps = ({ user }) => {
  const { userData, loading, error } = user;
  return { userData, loading, error };
};
export default connect(mapStateToProps, { changePassword })(
  withTranslation()(Mui.withWidth()(ChangePassword))
);
