import React from "react";
import * as Mui from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  IconEdit,
  IconTrash,
  IconEye,
  IconRefresh,
  IconMoreKebab,
} from "../../svg";
import { useTranslation } from "react-i18next";

const Action = (props) => {
  const { t } = useTranslation();
  const {
    index,
    handleOpenActionMenu,
    actionMenu,
    actionMenuId,
    handleCloseActionMenu,
    row,
    handleOpenAlert,
    handleOpenModal,
    handleCustomAction,
    permission,
    route,
    actionStyle, //option: kebab,icons, button
  } = props;

  return (
    <Mui.TableCell>
      {/* For Action Default Button List */}
      {actionStyle === "button" ? (
        <>
          {permission?.onboard && !row.websiteId ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => handleCustomAction(row.id)}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.ONBOARD")}
            </Mui.Button>
          ) : null}
          {permission?.resendCode && !row.isVerified ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => handleCustomAction(row.id)}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.RESEND_CODE")}
            </Mui.Button>
          ) : null}
          {permission?.view ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              component={Link}
              to={route + "/view/" + row.id}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.VIEW")}
            </Mui.Button>
          ) : null}
          {permission?.edit ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              component={Link}
              to={route + "/edit/" + row.id}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.EDIT")}
            </Mui.Button>
          ) : null}
          {permission?.delete ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => handleOpenAlert(row.id)}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.DELETE")}
            </Mui.Button>
          ) : null}
        </>
      ) : null}

      {/* For Action Icon List */}
      {actionStyle === "icons" ? (
        <>
          {permission?.onboard && !row.websiteId ? (
            <Mui.IconButton
              className="btn-action-icon"
              onClick={() => handleCustomAction(row.id)}
            >
              <IconRefresh />
            </Mui.IconButton>
          ) : null}
          {permission?.resendCode && !row.isVerified ? (
            <Mui.IconButton
              className="btn-action-icon"
              onClick={() => handleCustomAction(row.id)}
            >
              <IconRefresh />
            </Mui.IconButton>
          ) : null}
          {permission?.view ? (
            <Mui.IconButton
              className="btn-action-icon"
              component={Link}
              to={route + "/view/" + row.id}
            >
              <IconEye />
            </Mui.IconButton>
          ) : null}
          {permission?.edit ? (
            <Mui.IconButton
              className="btn-action-icon"
              component={Link}
              to={route + "/edit/" + row.id}
            >
              <IconEdit />
            </Mui.IconButton>
          ) : null}
          {permission?.delete ? (
            <Mui.IconButton
              className="btn-action-icon"
              onClick={() => handleOpenAlert(row.id)}
            >
              <IconTrash />
            </Mui.IconButton>
          ) : null}
        </>
      ) : null}

      {/* For 3 dot Menu */}
      {actionStyle === "kebab" ? (
        <>
          <Mui.IconButton
            aria-describedby={`action-${index}`}
            onClick={(e) => {
              handleOpenActionMenu(e, `action-${index}`);
            }}
          >
            <IconMoreKebab />
          </Mui.IconButton>

          <Mui.Popover
            id={`action-${index}`}
            classes={{ root: "kebab-dropdown" }}
            anchorEl={actionMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={actionMenuId === `action-${index}`}
            onClose={() => handleCloseActionMenu()}
          >
            {permission?.onboard && !row.websiteId ? (
              <Mui.MenuItem onClick={() => handleCustomAction(row.id)}>
                <span>{t("COMMON.FORM.ACTION.ONBOARD")}</span>
              </Mui.MenuItem>
            ) : null}
            {permission?.resendCode && !row.isVerified ? (
              <Mui.MenuItem onClick={() => handleCustomAction(row.id)}>
                <span>{t("COMMON.FORM.ACTION.RESEND_CODE")}</span>
              </Mui.MenuItem>
            ) : null}
            {permission?.view ? (
              <Mui.MenuItem component={Link} to={route + "/view/" + row.id}>
                <span>{t("COMMON.FORM.ACTION.VIEW")}</span>
              </Mui.MenuItem>
            ) : null}

            {permission?.edit ? (
              <Mui.MenuItem component={Link} to={route + "/edit/" + row.id}>
                <span>{t("COMMON.FORM.ACTION.EDIT")}</span>
              </Mui.MenuItem>
            ) : null}

            {permission?.delete ? (
              <Mui.MenuItem onClick={() => handleOpenAlert(row.id)}>
                <span>{t("COMMON.FORM.ACTION.DELETE")}</span>
              </Mui.MenuItem>
            ) : null}
          </Mui.Popover>
        </>
      ) : null}

      {/* For Modal View */}
      {actionStyle === "modal" ? (
        <>
          {permission?.view ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => handleOpenModal(row.id)}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.VIEW")}
            </Mui.Button>
          ) : null}
          {permission?.edit ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.EDIT")}
            </Mui.Button>
          ) : null}
          {permission?.delete ? (
            <Mui.Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => handleOpenAlert(row.id)}
              className="font-weight-normal text-transform-none mr-1"
            >
              {t("COMMON.FORM.ACTION.DELETE")}
            </Mui.Button>
          ) : null}
        </>
      ) : null}
    </Mui.TableCell>
  );
};
export default Action;
