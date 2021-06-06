import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";
import en from "../../assets/images/en.svg";
import no from "../../assets/images/no.svg";
import { IconChevronDown } from "../../components/svg";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const onMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const setLocale = (lng) => {
    i18n.changeLanguage(lng);
    onMenuClose();
  };

  return (
    <>
      <Mui.Button
        variant="outlined"
        endIcon={<IconChevronDown />}
        onClick={onMenuOpen}
        className="ml-2 mr-1 svg-size-xs svg-color-toolbar-icon"
      >
        <img
          src={i18n.language === "en" ? en : no}
          alt=""
          className="img-fluid"
        />
      </Mui.Button>
      <Mui.Popover
        className="kebab-dropdown"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <Mui.MenuItem
          selected={i18n.language === "en"}
          onClick={() => setLocale("en")}
        >
          <span className="d-flex">
            <img src={en} alt="" className="img-fluid mr-2" />
            English
          </span>
        </Mui.MenuItem>
        <Mui.MenuItem
          selected={i18n.language === "no"}
          onClick={() => setLocale("no")}
        >
          <span className="d-flex">
            <img src={no} alt="" className="img-fluid mr-2" />
            Norwegian
          </span>
        </Mui.MenuItem>
      </Mui.Popover>
    </>
  );
}
