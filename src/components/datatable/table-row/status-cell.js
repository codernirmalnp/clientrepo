import React from "react";
import { useTranslation } from "react-i18next";

const StatusCell = (props) => {
  const { data } = props;
  const { i18n } = useTranslation();
  const setStatusColor = (stat) => {
    if (stat === "pending") {
      return "warn";
    } else if (
      stat === "active" ||
      stat === "approved" ||
      stat === "paid" ||
      stat === "done"
    ) {
      return "success";
    } else if (stat === "inactive") {
      return "disabled";
    } else if (stat === "cancelled") {
      return "danger";
    }
  };
  return (
    <span
      className={`status-bg ${setStatusColor(
        data["statusConfigChoice"]?.["configChoice"] || ""
      )}`}
    >
      {/* {data["statusConfigChoice"]?.["displayName"]?.[i18n.language] || ""} */}
      {data["statusConfigChoice"]?.["displayName"] || ""}
    </span>
  );
};

export default StatusCell;
