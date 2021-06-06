import React from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";

const TableHeader = (props) => {
  const {
    onSelectAllClick,
    sortOrder,
    activeCol,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    enableCheckbox,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const { t } = useTranslation();

  return (
    <Mui.TableHead>
      <Mui.TableRow>
        {enableCheckbox ? (
          <Mui.TableCell padding="checkbox">
            <Mui.Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </Mui.TableCell>
        ) : null}

        {headCells &&
          headCells.map((headCell) => (
            <Mui.TableCell
              key={headCell.sortKey}
              sortDirection={activeCol === headCell.sortKey ? sortOrder : false}
            >
              <Mui.TableSortLabel
                active={activeCol === headCell.sortKey}
                direction={activeCol === headCell.sortKey ? sortOrder : "asc"}
                onClick={createSortHandler(headCell.sortKey)}
              >
                {headCell.label}
              </Mui.TableSortLabel>
            </Mui.TableCell>
          ))}
        <Mui.TableCell align={"left"} padding={"default"}>
          {t("COMMON.FORM.ACTION.LABEL")}
        </Mui.TableCell>
      </Mui.TableRow>
    </Mui.TableHead>
  );
};
export default TableHeader;
