import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import * as Yup from "yup";
import {
  getUser,
  addUser,
  editUser,
  getAllRole,
  getConfigChoice,
  getCountryList,
} from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import {
  InputField,
  SelectField,
  AutocompleteSelectField,
} from "../../../components/form";
import { Link } from "react-router-dom";
import defaultAvatar from "../../../assets/images/user-avatar.svg";
import { IconClose } from "../../../components/svg";
import Dropzone from "../../../components/dropzone";
import { Alert } from "../../../components/dialog";
import { defaultCountry } from "../../../configs/constant";
class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attachment: [],
      anchorEl: null,
      openDropzone: false,
      openAlert: false,
      field: null,
      values: null,
    };
    this.schema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
      fullname: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
      roleId: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
    });
    this.props.getCountryList();
    this.props.getConfigChoice("userStatus");
    this.props.getAllRole();
    if (this.props.match.params.id) {
      this.props.getUser(this.props.match.params.id);
    }
  }

  handleOpenAlert = () => {
    this.setState({ openAlert: true });
  };

  handleCloseAlert = () => {
    this.setState({ openAlert: false });
  };

  handleSubmit = (values) => {
    if (this.props.match.params.id) {
      if (
        values.email !== this.props.userData.email ||
        values.roleId !== this.props.userData.roleId
      ) {
        if (
          values.email !== this.props.userData.email &&
          values.roleId !== this.props.userData.roleId
        ) {
          this.setState({ field: "email, role" });
        } else if (values.email !== this.props.userData.email) {
          this.setState({ field: "email" });
        } else if (values.roleId !== this.props.userData.roleId) {
          this.setState({ field: "role" });
        }
        this.setState({ values: values, openAlert: true });
      } else {
        this.setState({ values: values }, () => this.onSubmit());
      }
    } else {
      this.setState({ values: values }, () => this.onSubmit());
    }
  };

  onSubmit = () => {
    let val = this.state.values;
    // val.photo.map(({ url, ...rest }) => ({ ...rest }));
    if (!this.props.loading) {
      if (this.props.match.params.id) {
        this.props.editUser(
          this.props.match.params.id,
          val,
          this.props.history
        );
      } else {
        this.props.addUser(val, this.props.history);
      }
    }
  };

  onOpenDropzone = (event) => {
    this.setState({ anchorEl: event.currentTarget, openDropzone: true });
  };

  onCloseDropzone = () => {
    this.setState({ anchorEl: null, openDropzone: false });
  };

  componentDidUpdate(previousProps) {
    if (previousProps.userData !== this.props.userData) {
      this.setState({ attachment: this.props.userData?.photo || [] });
    }
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <Breadcrumb
          title={t("PERMISSIONS.modules.userManagement")}
          paths={[
            {
              title: t("PERMISSIONS.modules.userManagement"),
              page: `/user-management/user`,
            },
            {
              title: t("PERMISSIONS.sections.user"),
              page: `/user-management/user`,
            },
            {
              title: this.props.match.params.id
                ? t("PERMISSIONS.actions.edit")
                : t("PERMISSIONS.actions.add"),
            },
          ]}
        />

        <Formik
          enableReinitialize={true}
          initialValues={{
            fullname: this.props.match.params.id
              ? this.props.userData?.fullname || ""
              : "",
            email: this.props.match.params.id
              ? this.props.userData?.email || ""
              : "",
            phone: this.props.match.params.id
              ? this.props.userData?.phone || ""
              : "",
            countryId: this.props.match.params.id
              ? this.props.userData?.countryId || defaultCountry.id
              : defaultCountry.id,
            roleId: this.props.match.params.id
              ? this.props.userData?.roleId || ""
              : "",
            streetAddress: this.props.match.params.id
              ? this.props.userData?.streetAddress || ""
              : "",
            postalCode: this.props.match.params.id
              ? this.props.userData?.postalCode || ""
              : "",
            postalCity: this.props.match.params.id
              ? this.props.userData?.postalCity || ""
              : "",
            status: this.props.match.params.id
              ? this.props.userData?.status || ""
              : "",
            photo: this.props.match.params.id
              ? this.props.userData?.photo || []
              : [],
          }}
          validationSchema={this.schema}
          onSubmit={this.handleSubmit}
        >
          {(props) => (
            <Form className="default-form">
              <Mui.Card className="default-card">
                <Mui.Box
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  className="upload-avatar-style1 pl-3 pr-3"
                >
                  <Mui.Avatar
                    alt={props.values.fullname}
                    src={
                      props.values?.photo?.length > 0 &&
                      props.values?.photo[0]?.url
                        ? props.values?.photo[0]?.url
                        : defaultAvatar
                    }
                    className="mr-3"
                  />
                  <Mui.Typography
                    component="h4"
                    variant="h4"
                    className="font-weight-normal"
                  >
                    {t("USER.CHANGE_AVATAR")}
                    <Mui.Typography
                      component="span"
                      variant="body1"
                      className="d-block text-color-muted font-weight-light"
                    >
                      {t("USER.ADD_RECENT_PHOTO")}
                    </Mui.Typography>
                  </Mui.Typography>

                  <Mui.Button
                    variant="contained"
                    color="primary"
                    className="btn-default ml-4"
                    onClick={this.onOpenDropzone}
                  >
                    {t("USER.UPLOAD")}
                  </Mui.Button>
                </Mui.Box>

                <Mui.Popover
                  classes={{ root: "popover-dropzone" }}
                  open={this.state.openDropzone}
                  anchorEl={this.state.anchorEl}
                  onClose={() => {
                    props.setFieldValue("photo", this.state.attachment);
                    this.onCloseDropzone();
                  }}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Mui.IconButton
                    className="pos-absolute pos-top-per-3 pos-right-per-3 svg-size-xs"
                    onClick={() => this.onCloseDropzone()}
                  >
                    <IconClose />
                  </Mui.IconButton>
                  <Mui.Box
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    p={3}
                  >
                    <Mui.Typography
                      component="h3"
                      variant="h3"
                      className="mb-3 font-weight-medium"
                    >
                      {t("USER.UPLOAD")}
                    </Mui.Typography>

                    <Mui.Typography
                      component="p"
                      variant="body1"
                      className="mb-3 font-weight-normal text-color-grey"
                    >
                      {t("USER.ADD_RECENT_PHOTO")}
                    </Mui.Typography>

                    <Dropzone
                      multiple={false}
                      init
                      // accept={"image/*,application/pdf,video/*"}
                      accept={"image/*"}
                      imgArr={this.state.attachment}
                      upload={(arr) => this.setState({ attachment: arr })}
                    />
                  </Mui.Box>
                </Mui.Popover>

                <Mui.Divider light={true} className="mt-4 mb-4" />
                <Mui.Typography
                  component="h4"
                  variant="h4"
                  className="mb-4 font-weight-normal"
                >
                  {t("USER.INFO_LABEL")}
                </Mui.Typography>

                <Mui.Grid container spacing={4}>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="fullname"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.FULLNAME")}
                    />
                  </Mui.Grid>

                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="email"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.EMAIL")}
                    />
                  </Mui.Grid>

                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <SelectField
                      name="roleId"
                      label={t("USER.FORM.PLACEHOLDER.ROLE")}
                      options={this.props.roles}
                      optionLabel="name"
                    />
                  </Mui.Grid>
                  {this.props.match.params.id ? (
                    <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                      <SelectField
                        name="status"
                        label={t("USER.FORM.PLACEHOLDER.STATUS")}
                        options={this.props.choiceList}
                        optionLabel="displayName"
                      />
                    </Mui.Grid>
                  ) : null}
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="streetAddress"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.ADDRESS")}
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="postalCode"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.CODE")}
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="postalCity"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.CITY")}
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <AutocompleteSelectField
                      name="countryId"
                      label={t("USER.FORM.PLACEHOLDER.COUNTRY")}
                      options={this.props.countryList}
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="phone"
                      type="text"
                      label={t("USER.FORM.PLACEHOLDER.PHONE")}
                      InputProps={{
                        startAdornment: (
                          <Mui.InputAdornment position="start">
                            {(this.props.countryList &&
                              this.props.countryList?.find(
                                (x) => x.id === props.values.countryId
                              )?.isdCode) ||
                              ""}
                          </Mui.InputAdornment>
                        ),
                      }}
                    />
                  </Mui.Grid>
                </Mui.Grid>

                <Mui.Divider light={true} className="mt-3 mb-5" />
                <Mui.Box
                  width="100%"
                  display="flex"
                  flexDirection={
                    Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
                  }
                >
                  <Mui.Button
                    className={`btn-default ${
                      Mui.isWidthDown("xs", this.props.width) ? "mb-3" : "mr-3"
                    }`}
                    type="submit"
                    color="primary"
                    variant="contained"
                    disableElevation
                  >
                    {t("COMMON.BUTTON.SAVE")}
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
                    component={Link}
                    to={"/user-management/user"}
                  >
                    {t("COMMON.BUTTON.BACK")}
                  </Mui.Button>
                  <Mui.Button
                    className="font-weight-normal text-transform-capitalize"
                    type="button"
                    variant="outlined"
                    disableElevation
                    onClick={props.resetForm}
                  >
                    {t("COMMON.BUTTON.RESET")}
                  </Mui.Button>
                </Mui.Box>
              </Mui.Card>
            </Form>
          )}
        </Formik>
        <Alert
          open={this.state.openAlert}
          close={this.handleCloseAlert}
          action={this.onSubmit}
          title={t("USER.EDIT_LABEL")}
          info={t("USER.UPDATE_INFO_LABEL", {
            field: this.state.field,
          })}
          awaitingInfo={t("USER.UPDATING_LABEL")}
          actionBtnLabel={t("COMMON.YES")}
          loading={this.props.loading}
        />
      </>
    );
  }
}
const mapStateToProps = ({ user, shared, role }) => {
  const { permission, choiceList, countryList } = shared;
  const { roles } = role;
  const { userData, success, message, loading, error } = user;
  return {
    countryList,
    permission,
    choiceList,
    userData,
    roles,
    success,
    message,
    loading,
    error,
  };
};
export default connect(mapStateToProps, {
  getUser,
  addUser,
  editUser,
  getAllRole,
  getConfigChoice,
  getCountryList,
})(withTranslation()(Mui.withWidth()(EditUser)));
