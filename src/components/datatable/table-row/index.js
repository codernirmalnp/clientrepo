import React from "react";
import * as Mui from "@material-ui/core";
import Action from "./action";
import { useTranslation } from "react-i18next";
import UserAvatarCell from "./user-avatar-cell";
import StatusCell from "./status-cell";
import moment from "moment";
import { formatCurrency } from "../../../helpers/util";

const TableRow = (props) => {
  const {
    isItemSelected,
    labelId,
    row,
    handleClick,
    headCells,
    index,
    handleOpenActionMenu,
    actionMenu,
    actionMenuId,
    handleCloseActionMenu,
    handleOpenAlert,
    handleOpenModal,
    handleCustomAction,
    permission,
    route,
    actionStyle,
    enableCheckbox,
  } = props;
  const { i18n } = useTranslation();

  return (
    <Mui.TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
    >
      {enableCheckbox ? (
        <Mui.TableCell padding="checkbox">
          <Mui.Checkbox
            onClick={(event) => handleClick(event, row.id)}
            checked={isItemSelected}
            color="primary"
            inputProps={{ "aria-labelledby": labelId }}
          />
        </Mui.TableCell>
      ) : null}

      {headCells &&
        headCells.map((column, i) => {
          switch (column.id) {
            case "userAvatar":
              return (
                <Mui.TableCell key={i}>
                  <UserAvatarCell data={row} />
                </Mui.TableCell>
              );
            case "role":
              return (
                <Mui.TableCell key={i}>
                  {/* {row["role"]?.["name"]?.[i18n.language] || ""} */}
                  {row["role"]?.["name"] || ""}
                </Mui.TableCell>
              );
            case "nameObj":
              return (
                <Mui.TableCell key={i}>
                  {row["name"]?.[i18n.language] || ""}
                </Mui.TableCell>
              );
            case "orderBy":
              return <Mui.TableCell key={i}>{row["username"]}</Mui.TableCell>;
            case "adminUserEmail":
              return (
                <Mui.TableCell key={i}>
                  {row["adminUser"]?.[0]?.email || ""}
                </Mui.TableCell>
              );
            case "statusConfigChoice":
              return (
                <Mui.TableCell key={i}>
                  <StatusCell data={row} />
                </Mui.TableCell>
              );
            case "price":
              return (
                <Mui.TableCell key={i}>
                  {formatCurrency(row[column.id])}
                </Mui.TableCell>
              );
            case "total":
              return (
                <Mui.TableCell key={i}>
                  {formatCurrency(row[column.id])}
                </Mui.TableCell>
              );
            case "vat":
              return <Mui.TableCell key={i}>{row[column.id]}%</Mui.TableCell>;
            case "discount":
              return <Mui.TableCell key={i}>{row[column.id]}%</Mui.TableCell>;
            case "productCategory":
              return (
                <Mui.TableCell key={i}>
                  {row["productCategory"]?.["name"]}
                </Mui.TableCell>
              );
            case "createdAt":
              return (
                <Mui.TableCell key={i}>
                  {row["createdAt"]
                    ? moment(row["createdAt"]).format("MMM DD, YYYY")
                    : ""}
                </Mui.TableCell>
              );
            case "orderDate":
              return (
                <Mui.TableCell key={i}>
                  {row["createdAt"]
                    ? moment(row["createdAt"]).format("MMM DD, YYYY HH:mm")
                    : ""}
                </Mui.TableCell>
              );
            default:
              return <Mui.TableCell key={i}>{row[column.id]}</Mui.TableCell>;
          }
        })}

      <Action
        index={index}
        handleOpenActionMenu={handleOpenActionMenu}
        actionMenu={actionMenu}
        actionMenuId={actionMenuId}
        handleCloseActionMenu={handleCloseActionMenu}
        row={row}
        handleOpenAlert={handleOpenAlert}
        handleOpenModal={handleOpenModal}
        handleCustomAction={handleCustomAction}
        permission={permission}
        route={route}
        actionStyle={actionStyle}
      />
    </Mui.TableRow>
  );
};
export default TableRow;
