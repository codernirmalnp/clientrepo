import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import {
  getCurrentUser,
  editUser,
  resetUser,
  getCountryList,
} from "../../../reduxs/actions";
import { withTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import {
  InputField,
  StyledSwitch,
  AutocompleteSelectField,
} from "../../../components/form";
import {
  IconPhone,
  IconCamera,
  IconMail,
  IconHome,
  IconPin,
  IconMoreKebab,
  IconClose,
} from "../../../components/svg";
import * as Yup from "yup";
import ChangePassword from "./change-password";
import Dropzone from "../../../components/dropzone";
import { defaultCountry } from "../../../configs/constant";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      changePassword: false,
      anchorEl: null,
      openMenu: false,
      attachment: [],
      anchorEl1: null,
      openDropzone: false,
    };
    this.schema = Yup.object().shape({
      email: Yup.string()
        .email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
      fullname: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
    });
    this.props.getCountryList();
  }

  onSubmit = (values) => {
    if (!this.props.loading) {
      this.props.editUser(values.id, values);
    }
  };

  onOpenDropzone = (event) => {
    this.setState({ anchorEl1: event.currentTarget, openDropzone: true });
  };

  onCloseDropzone = () => {
    this.setState({ anchorEl1: null, openDropzone: false });
  };

  onOpenMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget, openMenu: true });
  };

  onCloseMenu = () => {
    this.setState({ anchorEl: null, openMenu: false });
  };

  reset = () => {
    this.setState({ editMode: false, changePassword: false });
  };

  componentDidUpdate(previousProps) {
    if (previousProps.success !== this.props.success) {
      if (this.props.success) {
        this.setState({ editMode: false, changePassword: false });
        this.props.resetUser();
        this.props.getCurrentUser();
      }
    }
    if (previousProps.userData !== this.props.userData) {
      this.setState({ attachment: this.props.userData?.photo || [] });
    }
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <>
        <Mui.Paper className="user-profile">
          <Mui.IconButton className="btn-kebab" onClick={this.onOpenMenu}>
            <IconMoreKebab />
          </Mui.IconButton>
          {this.state.changePassword ? (
            <ChangePassword reset={this.reset} />
          ) : (
            <Formik
              enableReinitialize={true}
              initialValues={{
                id: this.props.userData?.id || "",
                fullname: this.props.userData?.fullname || "",
                countryId: this.props.userData?.countryId || defaultCountry.id,
                phone: this.props.userData?.phone || "",
                email: this.props.userData?.email || "",
                streetAddress: this.props.userData?.streetAddress || "",
                postalCity: this.props.userData?.postalCity || "",
                postalCode: this.props.userData?.postalCode || "",
                roleId: this.props.userData?.roleId || "",
                photo: this.props.userData?.photo || [],
                enableNotification:
                  this.props.userData?.enableNotification || 0,
              }}
              validationSchema={this.schema}
              onSubmit={this.onSubmit}
            >
              {(props) => (
                <Form className="default-form">
                  <figure className="user-profile__img">
                    <Mui.Avatar
                      alt={props.values.fullname || ""}
                      src={
                        props.values?.photo?.length > 0 &&
                        props.values?.photo[0]?.url
                          ? props.values?.photo[0]?.url
                          : "/static/images/avatar/1.jpg"
                      }
                    />
                    {this.state.editMode ? (
                      <Mui.IconButton onClick={this.onOpenDropzone}>
                        <IconCamera />
                      </Mui.IconButton>
                    ) : null}
                  </figure>

                  <Mui.Popover
                    classes={{ root: "popover-dropzone" }}
                    open={this.state.openDropzone}
                    anchorEl={this.state.anchorEl1}
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
                        accept={"image/*"}
                        imgArr={this.state.attachment}
                        upload={(arr) => this.setState({ attachment: arr })}
                      />
                    </Mui.Box>
                  </Mui.Popover>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field name"
                  >
                    <InputField
                      variant="filled"
                      name="fullname"
                      type="text"
                      label=""
                      disabled={!this.state.editMode}
                    />
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
                    className="mb-3 font-weight-medium"
                  >
                    {t("PROFILE.CONTACT_INFORMATION")}
                  </Mui.Typography>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconMail />
                      {t("PROFILE.FORM.EMAIL") + ":"}
                    </Mui.Typography>
                    <InputField
                      variant="filled"
                      name="email"
                      type="email"
                      label=""
                      // placeholder={""}
                      disabled={!this.state.editMode}
                    />
                  </Mui.Box>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconPin />
                      {t("PROFILE.FORM.COUNTRY") + ":"}
                    </Mui.Typography>
                    <AutocompleteSelectField
                      name="countryId"
                      variant="filled"
                      label=""
                      options={this.props.countryList}
                      disabled={!this.state.editMode}
                    />
                  </Mui.Box>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconPhone />
                      {t("PROFILE.FORM.PHONE") + ":"}
                    </Mui.Typography>
                    <InputField
                      variant="filled"
                      name="phone"
                      type="text"
                      label=""
                      // placeholder="+123 456789025"
                      disabled={!this.state.editMode}
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
                  </Mui.Box>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconHome />
                      {t("PROFILE.FORM.ADDRESS") + ":"}
                    </Mui.Typography>
                    <InputField
                      variant="filled"
                      name="streetAddress"
                      type="text"
                      label=""
                      // placeholder="5th Street"
                      disabled={!this.state.editMode}
                    />
                  </Mui.Box>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconPin />
                      {t("PROFILE.FORM.CITY") + ":"}
                    </Mui.Typography>
                    <InputField
                      variant="filled"
                      name="postalCity"
                      type="text"
                      label=""
                      // placeholder=""
                      disabled={!this.state.editMode}
                    />
                  </Mui.Box>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      <IconPin />
                      {t("PROFILE.FORM.CODE") + ":"}
                    </Mui.Typography>
                    <InputField
                      variant="filled"
                      name="postalCode"
                      type="text"
                      label=""
                      // placeholder=""
                      disabled={!this.state.editMode}
                    />
                  </Mui.Box>

                  <Mui.Typography
                    component="h4"
                    variant="subtitle2"
                    className="mt-2 mb-3 font-weight-medium"
                  >
                    {t("PROFILE.OTHER_INFORMATION")}
                  </Mui.Typography>

                  <Mui.Box
                    display="flex"
                    flexDirection="column"
                    className="profile-field"
                  >
                    <Mui.Typography component="label" variant="body1">
                      {t("PROFILE.SETTING")}
                    </Mui.Typography>

                    <Mui.Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Mui.Grid item>
                        <Mui.Typography
                          component="span"
                          variant="subtitle2"
                          className="text-color-default"
                        >
                          {t("PROFILE.GET_NOTIFICATION")}
                        </Mui.Typography>
                      </Mui.Grid>
                      <Mui.Grid item className="ml-auto">
                        <StyledSwitch
                          value={props.values.enableNotification}
                          checked={props.values.enableNotification === 1}
                          onChange={(e) => {
                            props.setFieldValue(
                              `enableNotification`,
                              e.target.checked ? 1 : 0
                            );
                          }}
                          name={`enableNotification`}
                          disabled={!this.state.editMode}
                        />
                      </Mui.Grid>
                      <Mui.Grid item>
                        <Mui.Typography component="span" variant="body1">
                          {props.values.enableNotification === 1
                            ? t("PROFILE.ENABLED")
                            : t("PROFILE.DISABLED")}
                        </Mui.Typography>
                      </Mui.Grid>
                    </Mui.Grid>
                  </Mui.Box>

                  {this.state.editMode ? (
                    <>
                      <Mui.Divider light={true} className="mt-3 mb-4" />

                      <Mui.Box
                        width="100%"
                        display="flex"
                        flexWrap="wrap"
                        flexDirection={
                          Mui.isWidthDown("xs", this.props.width)
                            ? "column"
                            : "row"
                        }
                        alignItems={
                          Mui.isWidthDown("xs", this.props.width)
                            ? "strech"
                            : "center"
                        }
                      >
                        <Mui.Button
                          className={`btn-default ${
                            Mui.isWidthDown("xs", this.props.width)
                              ? "mb-3"
                              : "mr-3"
                          }`}
                          type="submit"
                          variant="contained"
                          color="primary"
                          disableElevation
                          disabled={this.props.loading}
                        >
                          {t("COMMON.BUTTON.SAVE")}
                          {this.props.loading && (
                            <Mui.CircularProgress color="secondary" size={24} />
                          )}
                        </Mui.Button>

                        <Mui.Button
                          className={`btn-default ${
                            Mui.isWidthDown("xs", this.props.width)
                              ? "mb-3"
                              : "mr-3"
                          }`}
                          color="primary"
                          type="button"
                          variant="outlined"
                          disableElevation
                          onClick={() => this.setState({ editMode: false })}
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
                    </>
                  ) : null}
                </Form>
              )}
            </Formik>
          )}
        </Mui.Paper>

        <Mui.Menu
          open={this.state.openMenu}
          anchorEl={this.state.anchorEl}
          onClose={this.onCloseMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PopoverClasses={{ root: "kebab-dropdown" }}
        >
          <Mui.MenuItem
            onClick={() => {
              this.onCloseMenu();
              this.setState({ editMode: true, changePassword: false });
            }}
          >
            {t("PROFILE.EDIT_PROFILE")}
          </Mui.MenuItem>
          <Mui.MenuItem
            onClick={() => {
              this.onCloseMenu();
              this.setState({ changePassword: true, editMode: false });
            }}
          >
            {t("PROFILE.CHANGE_PASSWORD")}
          </Mui.MenuItem>
          {/* <Mui.MenuItem
            onClick={() => {
              this.onCloseMenu();
            }}
          >
            {t("PROFILE.DEACTIVATE_ACCOUNT")}
          </Mui.MenuItem> */}
        </Mui.Menu>
      </>
    );
  }
}
const mapStateToProps = ({ user, shared }) => {
  const { countryList } = shared;
  const { userData, success, message, loading, error } = user;
  return { countryList, userData, success, message, loading, error };
};
export default connect(mapStateToProps, {
  getCurrentUser,
  editUser,
  resetUser,
  getCountryList,
})(withTranslation()(Mui.withWidth()(UserInfo)));
