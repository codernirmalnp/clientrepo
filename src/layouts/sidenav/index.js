import React, { Component } from "react";
import { toolBarConfig, sideNavConfig } from "../../configs/constant";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../../reduxs/actions";
import Menu from "./menu";
import { IconLogout } from "../../components/svg";
import { withTranslation } from "react-i18next";
class Sidenav extends Component {
  onLogout = () => {
    this.props.logout(this.props.history);
  };

  render() {
    return (
      <>
        {toolBarConfig.style === "fixed" ? (
          <Mui.Toolbar className="placeholder-toolbar" />
        ) : (
          <Mui.Toolbar className="cms-drawer__toolbar">
            <figure className="toolbar-logo">
              <img src={sideNavConfig.primaryLogo} alt="Logo" />

              <img
                className="small-logo"
                src={sideNavConfig.secondaryLogo}
                alt="Logo"
              />
            </figure>
          </Mui.Toolbar>
        )}

        <Mui.List className="cms-drawer__list">
          {this.props.menuList?.map((item, index) => {
            return (
              <Menu
                item={item}
                key={index}
                location={this.props.location}
                drawerCollapse={this.props.drawerCollapse}
                closeDrawer={this.props.closeDrawer}
              />
            );
          })}
        </Mui.List>

        <Mui.Box className="cms-drawer__footer">
          <Mui.Button
            startIcon={<IconLogout />}
            className="text-color-side-nav svg-color-side-nav-icon"
            onClick={this.onLogout}
          >
            {this.props.t("MENU.LOGOUT")}
          </Mui.Button>

          <Mui.Typography
            component="h6"
            variant="body2"
            className="font-weight-light text-color-side-nav"
          >
            © 2021 {document.title}. <br /> All rights reserved.
          </Mui.Typography>
        </Mui.Box>
      </>
    );
  }
}

const mapStateToProps = ({ shared }) => {
  return {};
};
export default connect(mapStateToProps, { logout })(
  withTranslation()(Mui.withWidth()(Sidenav))
);
