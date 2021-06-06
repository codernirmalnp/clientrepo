import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import notFound from "../assets/images/404.svg";
import { withTranslation } from "react-i18next";

class NotFound extends Component {
  render() {
    const { t } = this.props;
    return (
      <main className="w-100 h-100 d-flex flex-direction-column align-items-center justify-content-center">
        <img src={notFound} alt="" />
        <Mui.Typography
          className="mt-1 mb-5 font-weight-semi-bold"
          component="h4"
          variant="h4"
        >
          {t("ERROR.NOT_FOUND")}
        </Mui.Typography>
        <Mui.Button
          href="/"
          color="primary"
          className="btn-default"
          variant="contained"
        >
          {t("AUTH.GENERAL.BACK_BUTTON")}
        </Mui.Button>
      </main>
    );
  }
}
export default withTranslation()(NotFound);
