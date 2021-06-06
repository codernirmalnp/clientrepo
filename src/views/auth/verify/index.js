import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { verifyUser } from "../../../reduxs/actions";
import { withTranslation } from "react-i18next";
class Verify extends Component {
  constructor(props) {
    super(props);
    this.props.verifyUser(this.props.match.params.token, this.props.history);
  }

  render() {
    return (
      <Mui.Backdrop className="loader" open={true}>
        <Mui.CircularProgress color="primary" size="24" />
      </Mui.Backdrop>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { success, message, loading, error } = auth;
  return { success, message, loading, error };
};
export default connect(mapStateToProps, {
  verifyUser,
})(withTranslation()(Verify));
