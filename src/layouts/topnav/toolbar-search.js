import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { IconSearch } from "../../components/svg";

const ToolbarSearch = (props) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <Mui.Box
      width={`${Mui.isWidthDown("xs", props.width) ? "auto" : "400px"}`}
      className="toolbar-search-wrap default-form-field"
    >
      {Mui.isWidthDown("xs", props.width) ? (
        <Mui.IconButton onClick={() => setShowMobileSearch(!showMobileSearch)}>
          <IconSearch />
        </Mui.IconButton>
      ) : null}

      <Mui.TextField
        variant="outlined"
        InputProps={{ startAdornment: <IconSearch /> }}
        placeholder="Search here..."
        className={`w-100 ${
          Mui.isWidthDown("xs", props.width) && showMobileSearch
            ? "mobile-search"
            : ""
        }`}
      />
    </Mui.Box>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

export default connect(mapStateToProps, {})(Mui.withWidth()(ToolbarSearch));
