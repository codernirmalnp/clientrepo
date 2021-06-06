import React, { Component } from "react";
import { toolBarConfig } from "../../configs/constant";
import * as Mui from "@material-ui/core";
import { withTranslation } from "react-i18next";
import SideNavTriggerCollapse from "../side-nav-trigger-collapse";
import SideNavTriggerMobile from "../side-nav-trigger-mobile";
import LanguageDropdown from "./language-dropdown";
import UserInfoDropdown from "./user-info-dropdown";
import NotificationDropdown from "./notification-dropdown";
import ToolbarSearch from "./toolbar-search";

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Mui.AppBar
          className={`cms-header ${
            toolBarConfig.style === "fixed" ? "clipped" : ""
          }`}
          position={toolBarConfig.style}
        >
          <Mui.Container className="container-fluid m-0" maxWidth={false}>
            <Mui.Toolbar>
              {toolBarConfig.style === "fixed" ? (
                <>
                  <figure className="toolbar-logo clipped">
                    <img src={toolBarConfig.primaryLogo} alt="Logo" />
                  </figure>
                </>
              ) : null}

              <SideNavTriggerCollapse
                toggleSideNav={this.props.toggleSideNav}
              />

              <SideNavTriggerMobile
                toggleMobileSideNav={this.props.toggleMobileSideNav}
              />

              <ToolbarSearch />

              <Mui.Box display="flex" alignItems="center" className="right-nav">
                <NotificationDropdown />

                <LanguageDropdown />

                <UserInfoDropdown history={this.props.history} />
              </Mui.Box>
            </Mui.Toolbar>
          </Mui.Container>
        </Mui.AppBar>
      </>
    );
  }
}

export default withTranslation()(Mui.withWidth()(Topnav));
