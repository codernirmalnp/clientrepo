import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginView = React.lazy(() =>
  import(/* webpackChunkName: "views-login" */ "./views/auth/login-v3")
);


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/login" render={(props) => <LoginView {...props} />} />
          </Switch>
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};
export default connect(mapStateToProps, {})(App);
