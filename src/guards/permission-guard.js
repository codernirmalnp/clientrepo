import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkPermission } from "../helpers/util";

const PermissionGuard = ({
  component: Component,
  data,
  permission,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkPermission(data.module, data.section, data.action, permission) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/403" />
        )
      }
    />
  );
};
export default PermissionGuard;
