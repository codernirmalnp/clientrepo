import React from "react";
import * as Mui from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useTranslation } from "react-i18next";

const TablePagination = (props) => {
  const {
    page,
    totalPage,
    totalItem,
    start,
    end,
    handleChangePage,
    pageSize,
    handleChangePageSize,
  } = props;
  const { t } = useTranslation();
  return (
    <Mui.Box
      className="pagination-datatable"
      width="100%"
      display="flex"
      flexDirection={Mui.isWidthDown("xs", props.width) ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Mui.Typography component="h5" variant="h5" className="page-info">
        {t("COMMON.SHOWING")} {start} – {end} {t("COMMON.FROM")} {totalItem}{" "}
        {t("COMMON.DATA")}
      </Mui.Typography>

      <Mui.Box
        display="flex"
        flexWrap={Mui.isWidthDown("xs", props.width) ? "wrap" : "no-wrap"}
        alignItems="center"
        justifyContent={
          Mui.isWidthDown("xs", props.width) ? "space-between" : "flex-start"
        }
        className="pagination-card"
      >
        <Mui.Typography component="h5" variant="h5">
          {t("COMMON.ITEMS_PER_PAGE")}
        </Mui.Typography>

        <Mui.Select value={pageSize} onChange={handleChangePageSize} label="">
          <Mui.MenuItem value={10}>10</Mui.MenuItem>
          <Mui.MenuItem value={25}>25</Mui.MenuItem>
          <Mui.MenuItem value={50}>50</Mui.MenuItem>
        </Mui.Select>

        <Pagination
          // showFirstButton
          // showLastButton
          page={page}
          onChange={handleChangePage}
          count={totalPage}
          variant="outlined"
          shape="rounded"
        />
      </Mui.Box>
    </Mui.Box>
  );
};
export default Mui.withWidth()(TablePagination);
