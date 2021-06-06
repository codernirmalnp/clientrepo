import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { IconCheck, IconChevronDown } from "../svg";
import { withTranslation } from "react-i18next";

class MultipleFilter extends Component {
  render() {
    return (
      <Mui.FormControl
        variant="outlined"
        className={`default-form-field tbl-filter-field ${
          Mui.isWidthDown("xs", this.props.width) ? "mb-2" : "ml-2"
        }`}
      >
        <Mui.TextField
          select
          variant="outlined"
          InputProps={
            this.props.label
              ? {
                  startAdornment: (
                    <Mui.InputAdornment>{this.props.label}:</Mui.InputAdornment>
                  ),
                }
              : null
          }
          onChange={this.props.onFilter}
          value={this.props.value ? this.props.value : []}
          SelectProps={{
            multiple: true,
            renderValue: (selected) => (
              <>
                {selected?.map((value, index) => (
                  <span key={index}>
                    {this.props.options?.find((x) => x.id === value)?.["name"]}
                    {index + 1 < selected?.length ? ", " : ""}
                  </span>
                ))}
              </>
            ),
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
          {this.props.options?.map((option, i) => (
            <Mui.MenuItem key={i} value={option.id}>
              {option.name}{" "}
              <span className="icon-selected">
                <IconCheck />
              </span>
            </Mui.MenuItem>
          ))}
        </Mui.TextField>
      </Mui.FormControl>
    );
  }
}

export default withTranslation()(Mui.withWidth()(MultipleFilter));
