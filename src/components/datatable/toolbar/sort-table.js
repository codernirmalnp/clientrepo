import React from "react";
import * as Mui from "@material-ui/core";
import { IconCheck, IconChevronDown } from "../../svg";

const SortTable = (props) => {
  const { sortItems } = props;

  return (
    <Mui.FormControl
      variant="outlined"
      className={`default-form-field tbl-filter-field ${
        Mui.isWidthDown("xs", props.width) ? "mb-2" : "mr-2"
      }`}
    >
      <Mui.TextField
        select
        variant="outlined"
        InputProps={{
          startAdornment: <Mui.InputAdornment>Sort By:</Mui.InputAdornment>,
        }}
        SelectProps={{
          MenuProps: {
            className: "select-dropdown",
            getContentAnchorEl: null,

            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          },
          IconComponent: IconChevronDown,
        }}
      >
        {sortItems.map((option, i) => (
          <Mui.MenuItem key={i} value={option.id}>
            {option.label}{" "}
            <span className="icon-selected">
              <IconCheck />
            </span>
          </Mui.MenuItem>
        ))}
      </Mui.TextField>
    </Mui.FormControl>
  );
};

export default Mui.withWidth()(SortTable);
