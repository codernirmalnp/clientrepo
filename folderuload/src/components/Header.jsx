import React from "react";
import { AppBar, Toolbar, Divider, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./HeaderStyles";

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search in Drive"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Divider />
    </div>
  );
}
