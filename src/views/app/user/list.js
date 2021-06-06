import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserList,
  resendVerificationCode,
  deleteUser,
  deleteMultipleUser,
  getConfigChoice,
  resetUser,
} from "../../../reduxs/actions";
import DataTable from "../../../components/datatable";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import { getPermission } from "../../../helpers/util";
import { Alert } from "../../../components/dialog";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteId: null,
      deleteIds: null,
      openAlert: false,
      openAlert1: false,
    };
    this.searchFields =
      "email:like;fullname:like;role.name:like;statusConfigChoice.display_name:like;";
    this.props.getUserList({});
    this.props.getConfigChoice("userStatus");
  }

  onDelete = () => {
    if (!this.props.loading1) {
      this.props.deleteUser(this.state.deleteId);
    }
  };

  onDeleteAll = () => {
    if (!this.props.loading1) {
      this.props.deleteMultipleUser(this.state.deleteIds);
    }
  };

  onResend = (id) => {
    if (!this.props.loading1) {
      this.props.resendVerificationCode(id);
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
    this.props.getUserList({
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
    const userPermission = getPermission(
      "userManagement",
      "user",
      ["edit", "add", "delete", "view", "resendCode"],
      permission
    );
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
            },
          ]}
        />

        <DataTable
          title={t("USER.TITLE")}
          headCells={[
            {
              id: "userAvatar",
              sortKey: "fullname",
              label: t("USER.FORM.FULLNAME"),
            },
            { id: "role", sortKey: "role_id", label: t("USER.FORM.ROLE") },
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
          rows={this.props.userList?.data || []}
          totalPage={this.props.userList?.meta?.pages || 0}
          totalItem={this.props.userList?.meta?.total || 0}
          start={this.props.userList?.meta?.start || 0}
          end={this.props.userList?.meta?.end || 0}
          loading={this.props.loading}
          route={"/user-management/user"}
          createLabel={t("USER.ADD_LABEL")}
          handleCustomAction={this.onResend}
          handleOpenAlert={this.handleOpenAlert}
          handleOpenAlert1={this.handleOpenAlert1}
          onChange={this.onChange}
          permission={userPermission}
          actionStyle="kebab"
          enableStatusFilter
          enableColumnFilter={false}
          enableCheckbox={false}
        />

        <Alert
          open={this.state.openAlert}
          close={this.handleCloseAlert}
          action={this.onDelete}
          title={t("USER.DELETE_LABEL")}
          info={t("USER.DELETE_INFO_LABEL")}
          awaitingInfo={t("USER.DELETING_LABEL")}
          actionBtnLabel={t("COMMON.FORM.ACTION.DELETE")}
          loading={this.props.loading1}
          success={this.props.success}
          reset={this.props.resetUser}
        />

        <Alert
          open={this.state.openAlert1}
          close={this.handleCloseAlert1}
          action={this.onDeleteAll}
          title={t("USER.DELETE_LABEL")}
          info={t("USER.MULTIPLE_DELETE_INFO_LABEL")}
          awaitingInfo={t("USER.DELETING_LABEL")}
          actionBtnLabel={t("COMMON.FORM.ACTION.DELETE")}
          loading={this.props.loading1}
          success={this.props.success}
          reset={this.props.resetUser}
        />
      </>
    );
  }
}
const mapStateToProps = ({ user, shared }) => {
  const { permission } = shared;
  const { userList, loading1, loading, success, error } = user;
  return { permission, userList, loading1, loading, success, error };
};
export default connect(mapStateToProps, {
  getUserList,
  resendVerificationCode,
  deleteUser,
  deleteMultipleUser,
  getConfigChoice,
  resetUser,
})(withTranslation()(UserList));
