import React, { Component } from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AuthGuard } from "../../guards";

const DashboardView = React.lazy(() =>
  import(/* webpackChunkName: "viwes-dashboard" */ "./dashboard")
);
const ProfileView = React.lazy(() =>
  import(/* webpackChunkName: "viwes-profile" */ "./profile")
);
const UserView = React.lazy(() =>
  import(/* webpackChunkName: "viwes-user" */ "./user")
);
const RoleView = React.lazy(() =>
  import(/* webpackChunkName: "viwes-role" */ "./role")
);
const SettingView = React.lazy(() =>
  import(/* webpackChunkName: "viwes-setting" */ "./setting")
);
class MainApp extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <AuthGuard
          exact
          path={`${match.url}`}
          user={this.props.user}
          component={DashboardView}
        />
        <AuthGuard
          path={`/profile`}
          user={this.props.user}
          component={ProfileView}
        />
        <AuthGuard
          path={`/user-management/user`}
          user={this.props.user}
          component={UserView}
        />
        <AuthGuard
          path={`/user-management/role`}
          user={this.props.user}
          component={RoleView}
        />
        <AuthGuard
          path={`/setting`}
          user={this.props.user}
          component={SettingView}
        />
        <Redirect path="*" to="/404" />
      </Switch>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default withRouter(connect(mapStateToProps, {})(MainApp));
