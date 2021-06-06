import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import {
  IconMoreKebab,
  IconInfo,
  IconArrowUp,
  IconArrowDown,
} from "../../../components/svg";
import { formatCurrency } from "../../../helpers/util";
import { withTranslation } from "react-i18next";

class BestProduct extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <Mui.Paper className="widget-card h-50">
        <Mui.IconButton size="small" className="btn-menu">
          <IconMoreKebab />
        </Mui.IconButton>

        <Mui.Typography
          component="h3"
          variant="h3"
          className="mb-2 font-weight-normal title"
        >
          {t("DASHBOARD.MOST_POPULAR_PRODUCT")}
          <Mui.Tooltip
            title={t("DASHBOARD.MOST_POPULAR_PRODUCT_TOOLTIP")}
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

        <Mui.Box maxHeight="74%" overflow="auto">
          {this.props.bestProductData?.map((item, index) => {
            return (
              <Mui.Box
                width="100%"
                display="flex"
                flexWrap={
                  Mui.isWidthDown("md", this.props.width) ? "wrap" : "nowrap"
                }
                className="mb-2"
                key={index}
              >
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
                  {item?.name?.[i18n.language] || "-"}
                </Mui.Typography>

                <Mui.Typography
                  component="h5"
                  variant="h5"
                  className={`flex-shrink-0  text-color-grey font-weight-medium`}
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

                  {formatCurrency(item.price)}
                </Mui.Typography>
              </Mui.Box>
            );
          })}

          {this.props.bestProductData?.length === 0 ? (
            <Mui.Typography
              component="h6"
              variant="h6"
              className="font-weight-normal text-center text-color-muted"
            >
              {t("COMMON.FORM.NO_RECORD_LABEL")}
            </Mui.Typography>
          ) : null}
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
)(withTranslation()(Mui.withWidth()(BestProduct)));
