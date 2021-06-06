import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getRoleList,
  deleteRole,
  deleteMultipleRole,
  getConfigChoice,
  resetRole,
} from "../../../reduxs/actions";
import DataTable from "../../../components/datatable";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import { getPermission } from "../../../helpers/util";
import { Alert } from "../../../components/dialog";
class RoleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteId: null,
      deleteIds: null,
      openAlert: false,
      openAlert1: false,
    };
    this.searchFields =
      "name:like;slug:like;statusConfigChoice.display_name:like;";
    this.props.getRoleList({});
    this.props.getConfigChoice("roleStatus");
  }

  onDelete = () => {
    if (!this.props.loading1) {
      this.props.deleteRole(this.state.deleteId);
    }
  };

  onDeleteAll = () => {
    if (!this.props.loading1) {
      this.props.deleteMultipleRole(this.state.deleteIds);
    }
  };

  handleOpenAlert = (id) => {
    this.setState({ openAlert: true, deleteId: id });
  };

  handleCloseAlert = () => {
    this.setState({ openAlert: false, deleteId: null });
  };

  handleOpenAlert1 = (ids) => {
    this.setState({ openAlert1: true, deleteIds: ids });
  };

  handleCloseAlert1 = () => {
    this.setState({ openAlert1: false, deleteIds: null });
  };

  onChange = (
    search,
    sortOrder,
    page,
    pageSize,
    activeCol,
    statusId = null
  ) => {
    this.props.getRoleList({
      search: search,
      searchFields: this.searchFields,
      sortOrder: sortOrder,
      page: page,
      pageSize: pageSize,
      activeCol: activeCol,
      statusId: statusId,
    });
  };

  render() {
    const { permission, t } = this.props;
    const rolePermission = getPermission(
      "userManagement",
      "role",
      ["edit", "add", "delete"],
      permission
    );
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
            },
          ]}
        />

        <DataTable
          title={t("ROLE.TITLE")}
          headCells={[
            {
              id: "name",
              sortKey: "name",
              label: t("ROLE.FORM.NAME"),
            },
            {
              id: "statusConfigChoice",
              sortKey: "status",
              label: t("COMMON.FORM.STATUS"),
            },
            {
              id: "createdAt",
              sortKey: "created_at",
              label: t("COMMON.FORM.CREATED_DATE"),
            },
          ]}
          rows={this.props.roleList?.data || []}
          totalPage={this.props.roleList?.meta?.pages || 0}
          totalItem={this.props.roleList?.meta?.total || 0}
          start={this.props.roleList?.meta?.start || 0}
          end={this.props.roleList?.meta?.end || 0}
          loading={this.props.loading}
          route={"/user-management/role"}
          createLabel={t("ROLE.ADD_LABEL")}
          handleOpenAlert={this.handleOpenAlert}
          handleOpenAlert1={this.handleOpenAlert1}
          onChange={this.onChange}
          permission={rolePermission}
          actionStyle="kebab"
          enableStatusFilter
          enableColumnFilter={false}
          enableCheckbox={false}
        />
        <Alert
          open={this.state.openAlert}
          close={this.handleCloseAlert}
          action={this.onDelete}
          title={t("ROLE.DELETE_LABEL")}
          info={t("ROLE.DELETE_INFO_LABEL")}
          awaitingInfo={t("ROLE.DELETING_LABEL")}
          actionBtnLabel={t("COMMON.FORM.ACTION.DELETE")}
          loading={this.props.loading1}
          success={this.props.success}
          reset={this.props.resetRole}
        />

        <Alert
          open={this.state.openAlert1}
          close={this.handleCloseAlert1}
          action={this.onDeleteAll}
          title={t("ROLE.DELETE_LABEL")}
          info={t("ROLE.MULTIPLE_DELETE_INFO_LABEL")}
          awaitingInfo={t("ROLE.DELETING_LABEL")}
          actionBtnLabel={t("COMMON.FORM.ACTION.DELETE")}
          loading={this.props.loading1}
          success={this.props.success}
          reset={this.props.resetRole}
        />
      </>
    );
  }
}
const mapStateToProps = ({ role, shared }) => {
  const { permission } = shared;
  const { roleList, loading1, loading, success, error } = role;
  return { permission, roleList, loading1, loading, success, error };
};
export default connect(mapStateToProps, {
  getRoleList,
  deleteRole,
  deleteMultipleRole,
  getConfigChoice,
  resetRole,
})(withTranslation()(RoleList));
