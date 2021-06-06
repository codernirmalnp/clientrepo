import React from "react";
import * as Mui from "@material-ui/core";
import { IconExpandedMenu } from "../components/svg";

const SideNavTriggerMobile = (props) => {
  return (
    <>
      {/* Open Close action Sidenav in smaller devices */}
      {!Mui.isWidthUp("md", props.width) ? (
        <Mui.IconButton
          className="mobile-menu-toggler mr-3 svg-color-toolbar-icon"
          onClick={() => props.toggleMobileSideNav()}
          size="small"
        >
          <IconExpandedMenu />
        </Mui.IconButton>
      ) : null}
    </>
  );
};

export default Mui.withWidth()(SideNavTriggerMobile);
