import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { IconAdd, IconGear } from "../../svg";
import { Link } from "react-router-dom";
import ColumnFilter from "./column-filter";
import Search from "../../search";
import BulkSelection from "./bulk-selection";
import { connect } from "react-redux";
import { Filter, MultipleFilter } from "../../filter";
import { useTranslation } from "react-i18next";

const TableToolbar = (props) => {
  const {
    title,
    numSelected,
    search,
    statusFilter,
    handleSearch,
    handleStatusFilter,
    permission,
    route,
    createLabel,
    handleOpenAlert1,
    headCells,
    enableStatusFilter,
    enableColumnFilter,
  } = props;
  const { t } = useTranslation();

  const [showFilter, setShowFilter] = useState(
    Mui.isWidthUp("md", props.width)
  );

  return (
    <Mui.Toolbar className="datatable-filter-bar">
      <Mui.Typography
        component="h3"
        variant="h3"
        className={`title ${
          Mui.isWidthDown("sm", props.width) ? "align-self-start" : "center"
        }`}
      >
        {title}
      </Mui.Typography>

      <Mui.Box
        width="100%"
        display="flex"
        flexWrap={Mui.isWidthDown("sm", props.width) ? "wrap" : "no-wrap"}
        justifyContent={`${
          Mui.isWidthDown("xs", props.width) ? "center" : "flex-end"
        }`}
        alignItems="center"
        className={`filter-bar-right ${
          Mui.isWidthDown("xs", props.width) ? "mt-2" : ""
        }`}
      >
        <Mui.Collapse
          in={showFilter}
          classes={{
            wrapperInner: `d-flex justify-content-end ${
              Mui.isWidthDown("xs", props.width)
                ? "flex-direction-column"
                : "row flex-wrap"
            }`,
          }}
        >
          <Search value={search} onSearch={handleSearch} />

          {enableStatusFilter ? (
            <Filter
              label={t("COMMON.FORM.STATUS")}
              value={statusFilter}
              onFilter={handleStatusFilter}
              options={props.choiceList}
              displayEmpty={true}
            />
          ) : null}
        </Mui.Collapse>

        <Mui.Hidden smUp>
          <Mui.Divider light={true} className="w-100 mb-1" />
        </Mui.Hidden>

        {/* Bulk Selection Action */}
        {numSelected > 0 ? (
          <BulkSelection
            selected={numSelected}
            onDelete={() => handleOpenAlert1()}
          />
        ) : null}

        {numSelected === 0 ? (
          <>
            {permission?.add ? (
              <Mui.Button
                color="primary"
                size="small"
                disableElevation
                component={Link}
                to={`${route}/add`}
                className={`flex-shrink-0 pl-1 ${
                  Mui.isWidthDown("xs", props.width) ? "" : "ml-2"
                }`}
              >
                {createLabel}
                <span className="ml-1 line-height-null">
                  <IconAdd />
                </span>
              </Mui.Button>
            ) : null}

            {enableColumnFilter ? <ColumnFilter headers={headCells} /> : null}
          </>
        ) : null}

        <Mui.Hidden mdUp>
          <Mui.IconButton
            color="primary"
            variant="outlined"
            className="btn-icon-square ml-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            <IconGear />
          </Mui.IconButton>
        </Mui.Hidden>

        <Mui.Hidden smUp>
          <Mui.Divider light={true} className="w-100 mt-1" />
        </Mui.Hidden>
      </Mui.Box>
    </Mui.Toolbar>
  );
};
const mapStateToProps = ({ shared }) => {
  const { choiceList } = shared;
  return { choiceList };
};
export default connect(mapStateToProps, {})(Mui.withWidth()(TableToolbar));
