import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import { IconMoreKebab, IconInfo } from "../../../components/svg";
import { withTranslation } from "react-i18next";
import { numberWithCommas } from "../../../helpers/util";
class PurchaseTypeSale extends Component {
  getProgress = () => {
    return (
      (this.props.purchaseTypeSaleData?.eatIn?.percent ||
        0 + this.props.purchaseTypeSaleData?.takeAway?.percent ||
        0) * 0.5
    );
  };

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
          {t("DASHBOARD.TOTAL")} {t("DASHBOARD.TAKE_AWAY")} <br />{" "}
          <span className="font-weight-light">{t("DASHBOARD.VS")}</span>{" "}
          {t("DASHBOARD.EAT_IN")}
          <Mui.Tooltip
            title={t("DASHBOARD.PURCHASE_TYPE_SALE_TOOLTIP")}
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

        <Mui.Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          className="circular-progress-chart rounded-corner"
        >
          <Mui.Box className="text-box">
            <Mui.CircularProgress
              size={163}
              thickness={3.5}
              variant="determinate"
              value={this.getProgress()}
            />

            <Mui.Typography
              component="h2"
              variant="h2"
              className="progress-label font-weight-semi-bold"
            >
              {this.props.purchaseTypeSaleData?.eatIn?.percent || 0}%
              <Mui.Typography
                component="span"
                variant="body2"
                className="d-block text-color-grey font-weight-normal"
              >
                {t("DASHBOARD.EAT_IN")}
              </Mui.Typography>
              <Mui.Divider light={true} />
              {this.props.purchaseTypeSaleData?.takeAway?.percent || 0}%
              <Mui.Typography
                component="span"
                variant="body2"
                className="d-block text-color-grey font-weight-normal"
              >
                {t("DASHBOARD.TAKE_AWAY")}
              </Mui.Typography>
            </Mui.Typography>
          </Mui.Box>
        </Mui.Box>

        <Mui.Box display="flex" justifyContent="space-between" className="mt-3">
          <Mui.Typography component="h3" variant="h3" className="title large">
            <Mui.Typography
              component="span"
              variant="h6"
              className="d-block mb-1 text-color-grey font-weight-normal"
            >
              {t("DASHBOARD.EAT_IN")} {t("DASHBOARD.ORDERS")}
            </Mui.Typography>
            {this.props.purchaseTypeSaleData?.eatIn?.sales
              ? numberWithCommas(this.props.purchaseTypeSaleData?.eatIn?.sales)
              : 0}
          </Mui.Typography>

          <Mui.Typography component="h3" variant="h3" className="title large">
            <Mui.Typography
              component="span"
              variant="h6"
              className="d-block mb-1 text-color-grey font-weight-normal"
            >
              {t("DASHBOARD.TAKE_AWAY")} {t("DASHBOARD.ORDERS")}
            </Mui.Typography>
            {this.props.purchaseTypeSaleData?.takeAway?.sales
              ? numberWithCommas(
                  this.props.purchaseTypeSaleData?.takeAway?.sales
                )
              : 0}
          </Mui.Typography>
        </Mui.Box>
      </Mui.Paper>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(withTranslation()(PurchaseTypeSale));
