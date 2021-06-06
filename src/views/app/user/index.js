import React, { Component } from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PermissionGuard } from "../../../guards";

const UserList = React.lazy(() =>
  import(/* webpackChunkName: "user-list" */ "./list")
);
const AddUser = React.lazy(() =>
  import(/* webpackChunkName: "add-user" */ "./edit")
);
const EditUser = React.lazy(() =>
  import(/* webpackChunkName: "edit-user" */ "./edit")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "view-user" */ "./view")
);
class User extends Component {
  render() {
    const { match, permission } = this.props;
    return (
      <Switch>
        <PermissionGuard
          exact
          path={`${match.url}`}
          data={{
            module: "userManagement",
            section: "user",
            action: "list",
          }}
          permission={permission}
          component={UserList}
        />
        <PermissionGuard
          path={`${match.url}/add`}
          data={{
            module: "userManagement",
            section: "user",
            action: "add",
          }}
          permission={permission}
          component={AddUser}
        />
        <PermissionGuard
          path={`${match.url}/edit/:id`}
          data={{
            module: "userManagement",
            section: "user",
            action: "edit",
          }}
          permission={permission}
          component={EditUser}
        />
        <PermissionGuard
          path={`${match.url}/view/:id`}
          data={{
            module: "userManagement",
            section: "user",
            action: "view",
          }}
          permission={permission}
          component={ViewUser}
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

export default withRouter(connect(mapStateToProps, {})(User));
