import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import * as Yup from "yup";
import {
  getRole,
  addRole,
  editRole,
  getModuleList,
  getConfigChoice,
} from "../../../reduxs/actions";
import { Formik, Form, FieldArray } from "formik";
import {
  InputField,
  TextareaField,
  SelectField,
  StyledSwitch,
} from "../../../components/form";
import { Link } from "react-router-dom";

class EditRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleList: [],
      tableHead: [],
    };
    this.schema = Yup.object().shape({
      nameEn: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
      nameNo: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
      status: Yup.string()
        .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD"))
        .nullable(),
    });
    this.props.getConfigChoice("roleStatus");
    if (this.props.match.params.id) {
      this.props.getRole(this.props.match.params.id);
    } else {
      this.props.getModuleList();
    }
  }

  setPermissionHead(data) {
    this.setState({ tableHead: [] }, () => {
      let val = [];
      data.forEach((permission, index) => {
        permission.section.forEach((section) => {
          section.action.forEach((action) => {
            if (val.indexOf(action.key) === -1) {
              val.push(action.key);
            }
          });
        });
      });
      this.setState({ tableHead: val });
    });
  }

  onSubmit = (values) => {
    if (!this.props.loading) {
      values.name = { en: values.nameEn, no: values.nameNo };
      if (this.props.match.params.id) {
        this.props.editRole(
          this.props.match.params.id,
          values,
          this.props.history
        );
      } else {
        this.props.addRole(values, this.props.history);
      }
    }
  };

  grantAll = (value, permission) => {
    permission.forEach((item) => {
      item.section.forEach((section) => {
        section.action.forEach((action) => {
          action.value = value ? 1 : 0;
        });
      });
    });
    return permission;
  };

  grantPermission = (value, section) => {
    section.action.forEach((action) => {
      action.value = value ? 1 : 0;
    });
    return section;
  };

  getTotalCheckedAction = (section) => {
    let count = 0;
    section.action.forEach((action) => {
      if (action.value === 1) {
        count += 1;
      }
    });
    return count;
  };

  componentDidUpdate(previousProps) {
    if (previousProps.moduleList !== this.props.moduleList) {
      this.setPermissionHead(this.props.moduleList);
    }
    if (previousProps.roleData !== this.props.roleData) {
      this.setPermissionHead(this.props.roleData?.rolePermissions);
    }
  }

  render() {
    const { t } = this.props;

    return (
      <>
        <Breadcrumb
          title={t("PERMISSIONS.modules.roleManagement")}
          paths={[
            {
              title: t("PERMISSIONS.modules.userManagement"),
              page: `/user-management/user`,
            },
            {
              title: t("PERMISSIONS.sections.role"),
              page: `/user-management/role`,
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
            nameEn: this.props.match.params.id
              ? this.props.roleData?.name?.en || ""
              : "",
            nameNo: this.props.match.params.id
              ? this.props.roleData?.name?.no || ""
              : "",
            description: this.props.match.params.id
              ? this.props.roleData?.description || ""
              : "",
            status: this.props.match.params.id
              ? this.props.roleData?.status || ""
              : "",
            rolePermissions: this.props.match.params.id
              ? this.props.roleData?.rolePermissions || []
              : this.props.moduleList,
          }}
          validationSchema={this.schema}
          onSubmit={this.onSubmit}
        >
          {(props) => (
            <Form className="default-form">
              <Mui.Card className="default-card">
                <Mui.Typography
                  component="h4"
                  variant="h4"
                  className="mb-4 font-weight-normal"
                >
                  {t("ROLE.GENERAL_INFO_LABEL")}
                </Mui.Typography>

                <Mui.Grid container spacing={4}>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="nameEn"
                      type="text"
                      label={t("ROLE.FORM.PLACEHOLDER.EN_NAME")}
                    />
                  </Mui.Grid>

                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <InputField
                      name="nameNo"
                      type="text"
                      label={t("ROLE.FORM.PLACEHOLDER.NO_NAME")}
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={6} md={4} className="form-group">
                    <SelectField
                      name="status"
                      label={t("ROLE.FORM.PLACEHOLDER.STATUS")}
                      options={this.props.choiceList}
                      optionLabel="displayName"
                    />
                  </Mui.Grid>
                  <Mui.Grid item xs={12} sm={12} md={6} className="form-group">
                    <TextareaField
                      name="description"
                      label={t("ROLE.FORM.PLACEHOLDER.DESCRIPTION")}
                    />
                  </Mui.Grid>
                </Mui.Grid>

                <Mui.Grid container spacing={4} className="mt-5">
                  <Mui.Grid item xs={12} md={12}>
                    <Mui.Box
                      className="mb-3"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Mui.Typography
                        component="h4"
                        variant="h4"
                        className="font-weight-normal"
                      >
                        {t("ROLE.FORM.PERMISSIONS")}
                      </Mui.Typography>

                      <Mui.FormControlLabel
                        className="m-0"
                        control={
                          <StyledSwitch
                            onChange={(event) => {
                              let per = this.grantAll(
                                event.target.checked,
                                props.values.rolePermissions
                              );
                              props.setFieldValue("rolePermissions", per);
                            }}
                            name="checked"
                          />
                        }
                        label={
                          <Mui.Typography
                            component="span"
                            variant="h5"
                            className="ml-2 font-weight-normal"
                          >
                            {t("ROLE.FORM.GRANT_ALL")}
                          </Mui.Typography>
                        }
                      />
                    </Mui.Box>

                    <FieldArray
                      name="rolePermissions"
                      render={() => (
                        <>
                          <Mui.TableContainer className="table-striped">
                            <Mui.Table>
                              <Mui.TableHead>
                                <Mui.TableRow>
                                  <Mui.TableCell
                                    component="th"
                                    colSpan={2}
                                    className="pl-0 text-color-grey-light font-size-md font-weight-normal"
                                  >
                                    {t("ROLE.MODULE_LABEL")}
                                  </Mui.TableCell>

                                  {this.state.tableHead?.map((head, i) => (
                                    <Mui.TableCell
                                      key={i}
                                      component="th"
                                      className="text-color-grey-light font-size-md font-weight-normal text-center"
                                    >
                                      {t("PERMISSIONS.actions." + head)}
                                    </Mui.TableCell>
                                  ))}
                                </Mui.TableRow>
                              </Mui.TableHead>

                              <Mui.TableBody>
                                {props.values?.rolePermissions?.map(
                                  (item, index) => (
                                    <>
                                      {item.section?.map((section, i) => (
                                        <Mui.TableRow key={i}>
                                          <Mui.TableCell
                                            component="td"
                                            className="border-color-light-grey pl-0 vertical-align-top"
                                            style={{ width: 60 }}
                                          >
                                            <Mui.FormControlLabel
                                              className="m-0"
                                              control={
                                                <Mui.Checkbox
                                                  className="checkbox-style-classic pt-0"
                                                  color="primary"
                                                  checked={
                                                    section.action.length ===
                                                    this.getTotalCheckedAction(
                                                      props.values
                                                        .rolePermissions?.[
                                                        index
                                                      ]?.section?.[i]
                                                    )
                                                  }
                                                  onChange={(event) => {
                                                    let per =
                                                      this.grantPermission(
                                                        event.target.checked,
                                                        section
                                                      );
                                                    props.setFieldValue(
                                                      `rolePermissions.${index}.section.${i}`,
                                                      per
                                                    );
                                                  }}
                                                />
                                              }
                                              label={""}
                                            />
                                          </Mui.TableCell>

                                          <Mui.TableCell
                                            component="td"
                                            className="vertical-align-bottom border-color-light-grey "
                                          >
                                            <Mui.Typography
                                              component="span"
                                              variant="h5"
                                              className="mb-2 d-block font-weight-light text-color-grey"
                                            >
                                              {t(
                                                "PERMISSIONS.modules." +
                                                  section.key +
                                                  "Management"
                                              )}
                                            </Mui.Typography>
                                            <Mui.Typography
                                              component="span"
                                              variant="body1"
                                              className="d-block"
                                            >
                                              {t(
                                                "PERMISSIONS.sections." +
                                                  section.key
                                              )}
                                            </Mui.Typography>
                                          </Mui.TableCell>

                                          {this.state.tableHead?.map(
                                            (head, j) => (
                                              <Mui.TableCell
                                                component="td"
                                                scope="row"
                                                key={j}
                                                className="vertical-align-bottom border-color-light-grey text-center"
                                              >
                                                {section.action?.map(
                                                  (action, k) => (
                                                    <>
                                                      {head === action.key ? (
                                                        <Mui.FormControlLabel
                                                          className="d-block ml-auto mr-auto"
                                                          style={{
                                                            maxWidth: 35,
                                                          }}
                                                          control={
                                                            <Mui.Checkbox
                                                              className="checkbox-style-classic"
                                                              color="primary"
                                                              value={
                                                                action.value
                                                              }
                                                              checked={
                                                                action.value ===
                                                                1
                                                              }
                                                              onChange={(e) => {
                                                                props.setFieldValue(
                                                                  `rolePermissions.${index}.section.${i}.action.${k}.value`,
                                                                  e.target
                                                                    .checked
                                                                    ? 1
                                                                    : 0
                                                                );
                                                              }}
                                                              name={`rolePermissions.${index}.section.${i}.action.${k}.${action.key}`}
                                                            />
                                                          }
                                                          label={""}
                                                        />
                                                      ) : null}
                                                    </>
                                                  )
                                                )}
                                              </Mui.TableCell>
                                            )
                                          )}
                                        </Mui.TableRow>
                                      ))}
                                    </>
                                  )
                                )}
                              </Mui.TableBody>
                            </Mui.Table>
                          </Mui.TableContainer>
                        </>
                      )}
                    />
                  </Mui.Grid>
                </Mui.Grid>

                <Mui.Box
                  width="100%"
                  display="flex"
                  flexDirection={
                    Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
                  }
                  className="mt-5"
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
                    to={"/user-management/role"}
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
      </>
    );
  }
}
const mapStateToProps = ({ role, shared }) => {
  const { permission, choiceList } = shared;
  const { moduleList, roleData, loading, error } = role;
  return {
    permission,
    choiceList,
    moduleList,
    roleData,
    loading,
    error,
  };
};
export default connect(mapStateToProps, {
  getRole,
  addRole,
  editRole,
  getModuleList,
  getConfigChoice,
})(withTranslation()(Mui.withWidth()(EditRole)));
