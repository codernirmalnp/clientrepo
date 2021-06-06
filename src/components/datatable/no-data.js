import React from "react";
import * as Mui from "@material-ui/core";
import { useTranslation } from "react-i18next";

const TableNoData = () => {
  const { t } = useTranslation();
  return (
    <Mui.TableRow>
      <Mui.TableCell colSpan="12" className="nodata">
        {t("COMMON.FORM.NO_RECORD_LABEL")}
      </Mui.TableCell>
    </Mui.TableRow>
  );
};
export default TableNoData;
