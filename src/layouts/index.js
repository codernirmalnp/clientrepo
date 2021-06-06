import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { toolBarConfig, sideNavConfig } from "../configs/constant";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout, getPermission, getCurrentUser } from "../reduxs/actions";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
import {
  IconConfiguration,
  IconDashboard,
  IconSiteSetting,
  IconUser,
  IconUsero,
} from "../components/svg";
// import { IdleTimeoutManager } from "idle-timer-manager";
class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileDrawerOpen: false,
      drawerCollapse: false,
      drawerHover: false,
      menuList: [],
    };
    this.props.getCurrentUser();
    this.props.getPermission();
  }

  _onIdle() {
    this.props.logout(this.props.history);
  }

  hanndelMobileDrawerOpenToggle = () => {
    this.setState({ mobileDrawerOpen: !this.state.mobileDrawerOpen });
  };

  hanndelDrawerCollapseToggle = () => {
    this.setState({ drawerCollapse: !this.state.drawerCollapse });
  };

  onHoverDrawer = (hover) => {
    if (
      this.state.drawerCollapse &&
      sideNavConfig.expandOnHover &&
      !sideNavConfig.hoverSubMenu
    ) {
      if (hover === "enter") {
        this.setState({ drawerHover: true });
      } else if (hover === "leave") {
        this.setState({ drawerHover: false });
      }
    }
  };

  checkSmallDevices = () => {
    if (Mui.isWidthUp("lg", this.props.width)) {
      this.setState({ drawerCollapse: sideNavConfig.collapseState.lg });
    } else if (Mui.isWidthUp("md", this.props.width)) {
      this.setState({ drawerCollapse: sideNavConfig.collapseState.md });
    } else {
      this.setState({ drawerCollapse: false });
    }
  };

  componentDidMount() {
    this.checkSmallDevices();
    // this.manager = new IdleTimeoutManager({
    //   timeout: 600, // 10 min
    //   onExpired: (time) => {
    //     this._onIdle();
    //   },
    // });

    // Set Side Nav Layout Colors
    document.documentElement.style.setProperty(
      "--side-nav-bg",
      sideNavConfig.bgColor
    );
    document.documentElement.style.setProperty(
      "--side-nav-text-color",
      sideNavConfig.textColor
    );
    document.documentElement.style.setProperty(
      "--side-nav-icon-color",
      sideNavConfig.iconColor
    );
    document.documentElement.style.setProperty(
      "--side-nav-active-color",
      sideNavConfig.activeColor
    );
    document.documentElement.style.setProperty(
      "--side-nav-hover-submenu-color",
      sideNavConfig.hoverSubmenubg
    );

    // Set Top Bar Layout Colors
    document.documentElement.style.setProperty(
      "--toolbar-bg",
      toolBarConfig.bgColor
    );
    document.documentElement.style.setProperty(
      "--toolbar-text-color",
      toolBarConfig.textColor
    );
    document.documentElement.style.setProperty(
      "--toolbar-icon-color",
      toolBarConfig.iconColor
    );
  }

  componentWillUnmount() {
    // this.manager.clear();
  }

  matchPageUrl = (pageName) => {
    switch (pageName) {
      case "user":
        return "/user-management/user";
      case "role":
        return "/user-management/role";
      case "setting":
        return "/setting";
      case "configChoice":
        return "/";
      case "configChoiceCategory":
        return "/";
      default:
        return "/";
    }
  };

  matchPageIcon = (pageName) => {
    switch (pageName) {
      case "userManagement":
        return <IconUser />;
      case "siteSetting":
        return <IconSiteSetting />;
      case "configuration":
        return <IconConfiguration />;
      default:
        return "";
    }
  };

  componentDidUpdate(previousProps) {
    if (previousProps.permission !== this.props.permission) {
      this.constructMenu();
    }
  }

  constructMenu = () => {
    let menuIgniter = [];
    menuIgniter.push({
      title: "Dashboard",
      root: true,
      icon: <IconDashboard />,
      path: "/",
      translate: "MENU.DASHBOARD",
    });

    this.props.permission?.forEach((module) => {
      let preparedMenu = {
        title: module.displayName,
        translate: "PERMISSIONS.modules." + module.key,
        root: true,
        icon: this.matchPageIcon(module.key),
        submenu: [],
        path: module?.section?.[0]?.key
          ? this.matchPageUrl(module?.section?.[0]?.key)
          : "/",
        permitted: false,
      };
      module.section.forEach((section) => {
        const sectionAllowed = section["action"].find(
          (act) => act.key === "list" && act.value
        )
          ? true
          : false;
        if (!preparedMenu.permitted) {
          preparedMenu["permitted"] = sectionAllowed;
        }
        if (sectionAllowed) {
          preparedMenu["submenu"].push({
            title: section.displayName,
            translate: "PERMISSIONS.sections." + section.key,
            icon: null,
            path: this.matchPageUrl(section.key),
          });
        }
      });
      if (preparedMenu.permitted) {
        menuIgniter.push(preparedMenu);
      }
    });

    // Static Menu Should be removed
    menuIgniter.push({
      title: "Login UI",
      root: true,
      icon: <IconUsero />,
      path: "/login",
      translate: "Login UI",
      submenu: [
        {
          title: "Login V1",
          root: true,
          icon: null,
          path: "/login",
          translate: "Login V1",
        },
        {
          title: "Login V2",
          root: true,
          icon: null,
          path: "/login-v2",
          translate: "Login V2",
        },
      ],
    });

    this.setState({ menuList: menuIgniter });
  };

  render() {
    return (
      <>
        <Mui.Drawer
          className={`cms-drawer ${
            this.state.drawerCollapse ? "collapsed" : "expanded"
          } ${this.state.drawerHover ? "hover-expand" : ""}`}
          variant={
            Mui.isWidthUp("md", this.props.width) ? "permanent" : "temporary"
          }
          onMouseEnter={() => this.onHoverDrawer("enter")}
          onMouseLeave={() => this.onHoverDrawer("leave")}
          open={this.state.mobileDrawerOpen}
          onClose={this.hanndelMobileDrawerOpenToggle}
          anchor="left"
        >
          <Sidenav
            toggleSideNav={this.hanndelDrawerCollapseToggle}
            history={this.props.history}
            location={this.props.location}
            drawerCollapse={this.state.drawerCollapse}
            menuList={this.state.menuList}
            closeDrawer={this.hanndelMobileDrawerOpenToggle}
          />
        </Mui.Drawer>

        <main
          className={`cms-drawer-content ${
            this.state.drawerCollapse ? "collapsed" : "expanded"
          }`}
        >
          <Topnav
            history={this.props.history}
            toggleSideNav={this.hanndelDrawerCollapseToggle}
            toggleMobileSideNav={this.hanndelMobileDrawerOpenToggle}
          />

          {toolBarConfig.style === "fixed" ? (
            <Mui.Toolbar className="placeholder-toolbar" />
          ) : null}

          <Mui.Container className="cms-body container-fluid" maxWidth={false}>
            {this.props.permission ? this.props.children : <></>}
          </Mui.Container>
        </main>
      </>
    );
  }
}
const mapStateToProps = ({ shared }) => {
  const { permission } = shared;
  return {
    permission,
  };
};
export default Mui.withWidth()(
  withRouter(
    connect(mapStateToProps, {
      logout,
      getPermission,
      getCurrentUser,
    })(AppLayout)
  )
);
