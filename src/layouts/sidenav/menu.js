import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sideNavConfig } from "../../configs/constant";
import * as Mui from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const { t } = useTranslation();
  const [currentpath, setCurrentpath] = useState("/");
  const [activePath, setActivePath] = useState("/");

  const [openCollapsible, setOpenCollapible] = useState(false);

  const history = useHistory();

  const navigateTo = (item) => {
    if (sideNavConfig.navigateOnParentClick) {
      if (item.path) history.push(item.path);

      // Close Menu Drawer if screen size is lower than medium device
      if (Mui.isWidthDown("md", props.width)) props.closeDrawer();
    } else {
      if (!item.submenu) {
        // Close Menu Drawer if screen size is lower than medium device
        if (Mui.isWidthDown("md", props.width)) props.closeDrawer();

        if (item.path) history.push(item.path);
      }

      setOpenCollapible(!openCollapsible); // Open Submenu on parent Click
    }
  };

  useEffect(() => {
    const currentUrl =
      window.location.pathname.split("/")[1] || window.location.pathname;
    setCurrentpath(currentUrl);

    setActivePath(props.item?.path.split("/")[1]);

    setOpenCollapible(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return (
    <Mui.Box
      component="li"
      className={`submenu-parent ${
        sideNavConfig.hoverSubMenu ? "hover-menu" : ""
      }`}
    >
      <Mui.ListItem
        component="a"
        className={`${currentpath === activePath ? "active" : ""}`}
        onClick={() => navigateTo(props.item)}
      >
        <span className="icon-menu">{props.item.icon}</span>

        <span>{t(props.item.translate)}</span>

        <span className="ml-auto pl-1 flex-shrink-0">
          {props.item.submenu && currentpath === activePath ? (
            <ExpandLess />
          ) : props.item.submenu ? (
            <ExpandMore />
          ) : null}
        </span>
      </Mui.ListItem>

      {props.item?.submenu?.length > 0 ? (
        <Mui.Collapse
          in={openCollapsible || currentpath === activePath}
          className="cms-drawer__list__submenu"
        >
          <Mui.List>
            {props.item.submenu?.map((val, j) => {
              return (
                <Mui.ListItem
                  key={j}
                  onClick={() => {
                    Mui.isWidthDown("md", props.width) && props.closeDrawer();
                  }}
                >
                  <NavLink to={val.path}>
                    <figure>{val.icon}</figure>
                    <span>{t(val.translate)}</span>
                  </NavLink>
                </Mui.ListItem>
              );
            })}
          </Mui.List>
        </Mui.Collapse>
      ) : null}
    </Mui.Box>
  );
};

export default Mui.withWidth()(Menu);
