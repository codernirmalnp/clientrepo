import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppLayout from "../layouts";

const AuthGuard = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <AppLayout>
            <Component {...props} />
          </AppLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { returnUrl: props?.location?.pathname || null },
            }}
          />
        )
      }
    />
  );
};
export default AuthGuard;
