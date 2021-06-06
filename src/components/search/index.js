import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withTranslation } from "react-i18next";

class Search extends Component {
  render() {
    const { t } = this.props;
    return (
      <Mui.FormControl
        variant="outlined"
        className={`default-form-field tbl-filter-field ${
          Mui.isWidthDown("xs", this.props.width) ? "mb-2" : ""
        }`}
      >
        <Mui.OutlinedInput
          value={this.props.value}
          placeholder={t("COMMON.SEARCH_LABEL")}
          onChange={this.props.onSearch}
          startAdornment={
            <Mui.InputAdornment position="start">
              <SearchIcon />
            </Mui.InputAdornment>
          }
        />
      </Mui.FormControl>
    );
  }
}
export default withTranslation()(Mui.withWidth()(Search));
