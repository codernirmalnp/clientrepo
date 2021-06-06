import React, { useEffect } from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Alert = (props) => {
  const {
    open,
    close,
    action,
    title,
    info,
    awaitingInfo,
    actionBtnLabel,
    loading,
    success,
    reset,
  } = props;
  const { t } = useTranslation();

  useEffect(() => {
    if (success) {
      close();
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <Mui.Dialog
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
      open={open}
      onClose={close}
      fullWidth={true}
      maxWidth={"xs"}
      classes={{ paper: "default-alert-dialog" }}
    >
      <Mui.DialogContent>
        <Mui.Typography
          component="h3"
          variant="h3"
          className="default-alert-dialog__title"
        >
          {title || ""}
        </Mui.Typography>

        <Mui.Typography component="p" className="message">
          {loading ? awaitingInfo : info}
        </Mui.Typography>
      </Mui.DialogContent>

      {loading ? (
        <Mui.LinearProgress classes={{ root: "mt-4 mb-2 progressing" }} />
      ) : (
        <Mui.Divider light={true} className="mt-4 mb-2" />
      )}

      <Mui.DialogActions>
        <Mui.Button
          onClick={action}
          className="btn-default"
          variant="contained"
          color="primary"
          disableElevation
          autoFocus
        >
          {actionBtnLabel}
        </Mui.Button>

        <Mui.Button
          onClick={() => close()}
          color="primary"
          className="btn-default"
          variant="outlined"
        >
          {t("COMMON.BUTTON.CANCEL")}
        </Mui.Button>
      </Mui.DialogActions>
    </Mui.Dialog>
  );
};
export default Alert;
