import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import * as Yup from "yup";
import { getSetting, editSetting } from "../../../reduxs/actions";
import { Formik, Form } from "formik";
import { InputField, InputColorpickerField } from "../../../components/form";
import Dropzone from "../../../components/dropzone";
import { IconClose, IconColorOrganization } from "../../../components/svg";
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, openDropzone: false, attachment: [] };
    this.props.getSetting();
    if (window.location.hostname === process.env.REACT_APP_API_URL) {
      this.schema = Yup.object().shape({
        siteTitle: Yup.string()
          .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
          .nullable(),
      });
    } else {
      this.schema = Yup.object().shape({
        eatInVat: Yup.string()
          .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
          .nullable(),
        takeAwayVat: Yup.string()
          .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
          .nullable(),
        primaryColor: Yup.string()
          .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
          .nullable(),
      });
    }
  }

  onOpenDropzone = (event) => {
    this.setState({ anchorEl: event.currentTarget, openDropzone: true });
  };

  onCloseDropzone = () => {
    this.setState({ anchorEl: null, openDropzone: false });
  };

  onSubmit = (values) => {
    if (!this.props.loading) {
      this.props.editSetting(values);
    }
  };

  componentDidUpdate(previousProps) {
    if (previousProps.settingData !== this.props.settingData) {
      this.setState({ attachment: this.props.settingData?.logo || [] });
    }
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <Breadcrumb
          title={t("PERMISSIONS.modules.siteSetting")}
          paths={[
            {
              title: t("PERMISSIONS.sections.setting"),
            },
          ]}
        />

        <Formik
          enableReinitialize={true}
          initialValues={
            window.location.hostname === process.env.REACT_APP_API_URL
              ? {
                  siteTitle: this.props.settingData?.siteTitle || "",
                }
              : {
                  eatInVat: this.props.settingData?.eatInVat || "",
                  takeAwayVat: this.props.settingData?.takeAwayVat || "",
                  primaryColor: this.props.settingData?.primaryColor || "",
                  primaryColorHue:
                    this.props.settingData?.primaryColorHue || "",
                  primaryColorSaturation:
                    this.props.settingData?.primaryColorSaturation || "",
                  primaryColorLight:
                    this.props.settingData?.primaryColorLight || "",
                  logo: this.props.settingData?.logo || [],
                }
          }
          validationSchema={this.schema}
          onSubmit={this.onSubmit}
        >
          {(props) => (
            <Form className="default-form">
              <Mui.Card className="default-card spacing-md">
                <Mui.Typography
                  component="h4"
                  variant="h4"
                  className="mb-1 font-weight-normal"
                >
                  {t("SETTING.VAT_LABEL")}
                </Mui.Typography>
                <Mui.Typography
                  component="p"
                  variant="body1"
                  className="mb-3 text-color-grey"
                >
                  {t("SETTING.VAT_INFO_LABEL")}
                </Mui.Typography>

                <Mui.Grid container spacing={4}>
                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    className="form-group"
                  >
                    <InputField
                      name="eatInVat"
                      type="text"
                      label={t("SETTING.FORM.EAT_IN_VAT")}
                      placeholder={t("SETTING.FORM.PLACEHOLDER.EAT_IN_VAT")}
                    />
                  </Mui.Grid>

                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    className="form-group"
                  >
                    <InputField
                      name="takeAwayVat"
                      type="text"
                      label={t("SETTING.FORM.TAKE_AWAY_VAT")}
                      placeholder={t("SETTING.FORM.PLACEHOLDER.TAKE_AWAY_VAT")}
                    />
                  </Mui.Grid>
                </Mui.Grid>

                <Mui.Divider light={true} className="mt-3 mb-5" />

                <Mui.Typography
                  component="h4"
                  variant="h4"
                  className="mb-4 font-weight-normal"
                >
                  {t("SETTING.FORM.KIOSK_THEME_SETTING")}
                </Mui.Typography>

                <Mui.Grid container spacing={4} className="mb-4">
                  <Mui.Grid item xs={12} sm={4} md={3} lg={2}>
                    <Mui.Box
                      display="flex"
                      className="upload-avatar-square medium"
                      mb={Mui.isWidthDown("xs", this.props.width) ? 3 : 0}
                    >
                      {props.values?.logo?.length > 0 &&
                      props.values?.logo[0]?.url ? (
                        <Mui.Avatar
                          alt={"logo"}
                          src={props.values?.logo[0]?.url}
                          classes={{ img: "object-fit-contain" }}
                        />
                      ) : (
                        <Mui.Box component="figure" className="placeholder-img">
                          <IconColorOrganization />
                        </Mui.Box>
                      )}
                    </Mui.Box>
                  </Mui.Grid>

                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className="d-flex flex-direction-column justify-content-between align-items-start"
                  >
                    <Mui.Typography
                      component="h6"
                      variant="h6"
                      className="mb-3 font-weight-normal text-color-grey"
                    >
                      <Mui.Typography
                        component="span"
                        variant="body1"
                        className="mb-1 d-block font-weight-normal text-color-default text-transform-capitalize"
                      >
                        {t("SETTING.FORM.COMPANY_LOGO")}
                      </Mui.Typography>
                      {t("SETTING.LOGO_INFO_LABEL")}
                    </Mui.Typography>

                    <Mui.Button
                      variant="contained"
                      color="primary"
                      className="btn-default"
                      onClick={this.onOpenDropzone}
                    >
                      {t("SETTING.FORM.PLACEHOLDER.COMPANY_LOGO")}
                    </Mui.Button>

                    <Mui.Popover
                      classes={{ root: "popover-dropzone" }}
                      open={this.state.openDropzone}
                      anchorEl={this.state.anchorEl}
                      onClose={() => {
                        props.setFieldValue("logo", this.state.attachment);
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
                        <Dropzone
                          multiple={false}
                          init
                          accept={"image/*"}
                          imgArr={this.state.attachment}
                          upload={(arr) => this.setState({ attachment: arr })}
                        />
                      </Mui.Box>
                    </Mui.Popover>
                  </Mui.Grid>
                </Mui.Grid>

                <Mui.Typography
                  component="h6"
                  variant="h6"
                  className="mb-3 pt-3 font-weight-normal text-color-grey"
                >
                  <Mui.Typography
                    component="span"
                    variant="body1"
                    className="mb-1 d-block font-weight-normal text-color-default text-transform-capitalize"
                  >
                    {t("SETTING.FORM.THEME_COLOR")}
                  </Mui.Typography>
                  {t("SETTING.COLOR_INFO_LABEL")}
                </Mui.Typography>

                <Mui.Grid container spacing={4}>
                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    className="form-group"
                  >
                    <InputColorpickerField
                      name="primaryColor"
                      type="text"
                      label={t("SETTING.FORM.PRIMARY_COLOR")}
                      placeholder={t("SETTING.FORM.PLACEHOLDER.PRIMARY_COLOR")}
                      callback={(hex, hue, saturation, light) => {
                        props.setFieldValue("primaryColorHue", hue);
                        props.setFieldValue(
                          "primaryColorSaturation",
                          saturation
                        );
                        props.setFieldValue("primaryColorLight", light);
                      }}
                    />
                  </Mui.Grid>
                </Mui.Grid>
                <Mui.Divider light={true} className="mt-5 mb-5" />

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
      </>
    );
  }
}
const mapStateToProps = ({ setting, shared }) => {
  const { permission } = shared;
  const { settingData, loading, error } = setting;
  return { permission, settingData, loading, error };
};
export default connect(mapStateToProps, { getSetting, editSetting })(
  withTranslation()(Mui.withWidth()(Setting))
);
