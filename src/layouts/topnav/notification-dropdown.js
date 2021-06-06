import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import {
  IconBell,
  IconChevronDown,
  IconProduct,
  IconUser,
  IconWarn,
} from "../../components/svg";

const NotificationDropDown = (props) => {
  // const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const StyledBadge = Mui.withStyles((theme) => ({
    badge: {
      minWidth: 15,
      minHeight: 15,
      right: 3,
      top: 0,
      border: `2px solid #fff`,
      borderRadius: 100,
    },
  }))(Mui.Badge);

  return (
    <>
      <Mui.IconButton className="svg-color-toolbar-icon" onClick={openMenu}>
        <StyledBadge variant="dot" color="secondary">
          <IconBell />
        </StyledBadge>
      </Mui.IconButton>

      <Mui.Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={closeMenu}
        elevation={0}
        classes={{ paper: "notification-dropdown" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Mui.Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          pl={3}
        >
          <Mui.Typography
            component="h5"
            variant="h5"
            className="font-weight-medium"
          >
            Notifications
          </Mui.Typography>

          <Mui.Button className=" pl-0 pr-0 text-color-grey-light">
            Mark All as Read
          </Mui.Button>
        </Mui.Box>

        <Mui.Divider light={true} />

        <Mui.MenuItem onClick={closeMenu} component={Link} to={"/"}>
          <span className="icon">
            <IconProduct />
          </span>

          <Mui.Typography component="span" variant="body1" className="content">
            <span className="d-block text-ellipsis">New item updated</span>
            <Mui.Typography
              component="small"
              variant="body2"
              className="d-block text-color-grey text-ellipsis"
            >
              Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
            </Mui.Typography>
          </Mui.Typography>

          <Mui.Typography component="span" variant="body2" className="time">
            2min ago
          </Mui.Typography>
        </Mui.MenuItem>

        <Mui.MenuItem onClick={closeMenu} component={Link} to={"/"}>
          <span className="icon">
            <IconUser />
          </span>

          <Mui.Typography component="span" variant="body1" className="content">
            <span className="d-block text-ellipsis">Meeting with Jonathan</span>
            <Mui.Typography
              component="small"
              variant="body2"
              className="d-block text-color-grey text-ellipsis"
            >
              Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
            </Mui.Typography>
          </Mui.Typography>

          <Mui.Typography component="span" variant="body2" className="time">
            22min ago
          </Mui.Typography>
        </Mui.MenuItem>

        <Mui.MenuItem onClick={closeMenu} component={Link} to={"/"}>
          <span className="icon">
            <IconWarn />
          </span>

          <Mui.Typography component="span" variant="body1" className="content">
            <span className="d-block text-ellipsis">Security setting changed</span>
            <Mui.Typography
              component="small"
              variant="body2"
              className="d-block text-color-grey text-ellipsis"
            >
              Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
            </Mui.Typography>
          </Mui.Typography>

          <Mui.Typography component="span" variant="body2" className="time">
            22min ago
          </Mui.Typography>
        </Mui.MenuItem>

        <Mui.Divider light={true} />
        <Mui.Button className="w-100 pt-2 pb-2 border-rad-0 svg-size-small">
          <IconChevronDown />
          <Mui.Typography
            component="span"
            variant="body1"
            className="ml-1 font-weight-normal line-height-null"
          >
            Show All Notifications
          </Mui.Typography>
        </Mui.Button>
      </Mui.Popover>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Mui.withWidth()(NotificationDropDown));
