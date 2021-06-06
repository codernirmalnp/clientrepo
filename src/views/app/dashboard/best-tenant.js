import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import {
  IconArrowUp,
  IconArrowDown,
  IconInfo,
  IconMoreKebab,
} from "../../../components/svg";
import { withTranslation } from "react-i18next";
import { formatCurrency } from "../../../helpers/util";
// const timeData = [
//   {
//     name: "12am",
//     uv: 1000,
//   },
// ];
class BestTenant extends Component {
  render() {
    const { t } = this.props;
    return (
      <Mui.Paper className="widget-card">
        <Mui.IconButton size="small" className="btn-menu">
          <IconMoreKebab />
        </Mui.IconButton>

        <Mui.Typography
          component="h3"
          variant="h3"
          className="mb-3 font-weight-normal title"
        >
          {t("DASHBOARD.MOST_ACTIVE_TENANT")}
          <Mui.Tooltip
            title={t("DASHBOARD.MOST_ACTIVE_TENANT_TOOLTIP")}
            arrow
            placement="bottom-start"
            PopperProps={{
              className:
                "MuiTooltip-popper MuiTooltip-popperArrow tooltip-popover default-tooltip",
            }}
          >
            <span className="ml-1 svg-color-grey">
              <IconInfo />
            </span>
          </Mui.Tooltip>
        </Mui.Typography>

        {this.props.topTenantData?.map((item, index) => {
          return (
            <Mui.Box width="100%" display="flex" className="mb-2" key={index}>
              <Mui.Typography
                component="h5"
                variant="h5"
                className="font-weight-normal mr-1"
              >
                #{item?.id || "-"}
              </Mui.Typography>

              <Mui.Typography
                component="h5"
                variant="h5"
                className="mr-auto font-weight-normal"
              >
                {item?.name || "-"}
              </Mui.Typography>

              <Mui.Typography
                component="h5"
                variant="h5"
                className="flex-shrink-0 ml-4 text-color-grey font-weight-medium"
              >
                {item?.comparison === "high" ? (
                  <span className="svg-size-xs svg-color-success mr-1">
                    <IconArrowUp />
                  </span>
                ) : null}
                {item?.comparison === "low" ? (
                  <span className="svg-size-xs svg-color-danger mr-1">
                    <IconArrowDown />
                  </span>
                ) : null}

                {formatCurrency(item.total)}
              </Mui.Typography>
            </Mui.Box>
          );
        })}

        {this.props.topTenantData?.length === 0 ? (
          <Mui.Typography
            component="h6"
            variant="h6"
            className="font-weight-normal text-center text-color-muted"
          >
            {t("COMMON.FORM.NO_RECORD_LABEL")}
          </Mui.Typography>
        ) : null}
      </Mui.Paper>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(withTranslation()(BestTenant));
