import React, { Component } from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PermissionGuard } from "../../../guards";

const RoleList = React.lazy(() =>
  import(/* webpackChunkName: "role-list" */ "./list")
);
const AddRole = React.lazy(() =>
  import(/* webpackChunkName: "add-role" */ "./edit")
);
const EditRole = React.lazy(() =>
  import(/* webpackChunkName: "edit-role" */ "./edit")
);
class Role extends Component {
  render() {
    const { match, permission } = this.props;
    return (
      <Switch>
        <PermissionGuard
          exact
          path={`${match.url}`}
          data={{
            module: "userManagement",
            section: "role",
            action: "list",
          }}
          permission={permission}
          component={RoleList}
        />
        <PermissionGuard
          path={`${match.url}/add`}
          data={{
            module: "userManagement",
            section: "role",
            action: "add",
          }}
          permission={permission}
          component={AddRole}
        />
        <PermissionGuard
          path={`${match.url}/edit/:id`}
          data={{
            module: "userManagement",
            section: "role",
            action: "edit",
          }}
          permission={permission}
          component={EditRole}
        />
        <Redirect to="/404" />
      </Switch>
    );
  }
}
const mapStateToProps = ({ shared }) => {
  const { permission } = shared;
  return {
    permission,
  };
};

export default withRouter(connect(mapStateToProps, {})(Role));
