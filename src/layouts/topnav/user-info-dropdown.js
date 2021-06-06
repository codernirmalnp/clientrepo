import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../../reduxs/actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import defaultAvatar from "../../assets/images/user-avatar.svg";
import { IconChevronDown, IconLogout, IconUsero } from "../../components/svg";

const UserInfoDropdown = (props) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const onLogout = () => {
    props.logout(props.history);
    closeMenu();
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Mui.Box
        display="flex"
        alignItems="center"
        className="ml-2 p-0"
        onClick={openMenu}
        component={Mui.Button}
      >
        <Mui.Avatar
          src={
            props.currentUserData?.photo?.length > 0 &&
            props.currentUserData?.photo[0]?.url
              ? props.currentUserData?.photo[0]?.url
              : defaultAvatar
          }
          alt={props.currentUserData?.fullname || ""}
          className="background-color-white"
        />
        {Mui.isWidthDown("md", props.width) ? null : (
          <>
            <Mui.Typography className="font-weight-normal ml-2 text-color-toolbar">
              {props.currentUserData?.fullname}
            </Mui.Typography>
            <span className="ml-1 p-0 line-height-null svg-size-small svg-color-toolbar-icon">
              <IconChevronDown />
            </span>
          </>
        )}
      </Mui.Box>

      <Mui.Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closeMenu}
        elevation={0}
        classes={{ paper: "user-dropdown" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Mui.MenuItem onClick={closeMenu} to={"/profile"} component={Link}>
          <span className="icon">
            <IconUsero />
          </span>
          {t("PROFILE.TITLE")}
        </Mui.MenuItem>

        <Mui.Divider light={true} />
        <Mui.MenuItem onClick={onLogout}>
          <span className="icon">
            <IconLogout />
          </span>
          {t("MENU.LOGOUT")}
        </Mui.MenuItem>
      </Mui.Popover>
    </>
  );
};
const mapStateToProps = ({ shared }) => {
  const { currentUserData } = shared;
  return {
    currentUserData,
  };
};
export default connect(mapStateToProps, { logout })(
  Mui.withWidth()(UserInfoDropdown)
);
