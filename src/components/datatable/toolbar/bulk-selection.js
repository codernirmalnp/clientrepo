import React from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { IconTrash } from "../../svg";

const BulkSelection = (props) => {
  const { selected, onDelete } = props;
  const { t } = useTranslation();

  return (
    <div className="selected-items">
      <Mui.Typography color="inherit" variant="subtitle1" component="span">
        {selected} {t("COMMON.SELECTED")}
      </Mui.Typography>

      <Mui.IconButton
        variant="outlined"
        className="btn-icon-square svg-color-danger border-color-danger ml-2"
        onClick={onDelete}
      >
        <IconTrash />
      </Mui.IconButton>
    </div>
  );
};

export default BulkSelection;
