import React from "react";
import * as Mui from "@material-ui/core";
import { IconExpandedMenu, IconCollpasedMenu } from "../components/svg";

const SideNavTriggerCollapse = (props) => {
  return (
    <>
      {/* Show Sidenav Open Collapse action in Large devices */}
      {Mui.isWidthUp("md", props.width) ? (
        <Mui.IconButton
          onClick={() => props.toggleSideNav()}
          size="small"
          className="mr-3 svg-color-toolbar-icon"
        >
          {props.drawerCollapse ? <IconCollpasedMenu /> : <IconExpandedMenu />}
        </Mui.IconButton>
      ) : null}
    </>
  );
};

export default Mui.withWidth()(SideNavTriggerCollapse);
