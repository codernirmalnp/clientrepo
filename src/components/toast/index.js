import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { IconCheckO, IconCloseO, IconInfo, IconWarn } from "../svg";
class Toast extends Component {
  render() {
    const { t } = this.props;

    const setToastType = (type) => {
      if (type === "success") {
        return { title: t("COMMON.SUCCESS"), icon: <IconCheckO /> };
      } else if (type === "error") {
        return { title: t("COMMON.ERROR"), icon: <IconCloseO /> };
      } else if (type === "warning") {
        return { title: t("COMMON.WARNING"), icon: <IconWarn /> };
      } else {
        return { title: t("COMMON.INFO"), icon: <IconInfo /> };
      }
    };

    return (
      <>
        <span className="icon">{setToastType(this.props.type).icon}</span>
        <Mui.Typography component="h5" variant="h5">
          {setToastType(this.props.type).title}
          <Mui.Typography component="span" variant="body1" className="d-block">
            {this.props.message}
          </Mui.Typography>
        </Mui.Typography>
      </>
    );
  }
}
export default withTranslation()(Toast);
