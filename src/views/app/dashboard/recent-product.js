import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { IconMoreKebab, IconInfo } from "../../../components/svg";
import moment from "moment";
class RecentProduct extends Component {
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
          {t("DASHBOARD.RECENT_PRODUCT")}
          <Mui.Tooltip
            title={t("DASHBOARD.RECENT_PRODUCT_TOOLTIP")}
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
          {this.props.recentProductData?.map((item, index) => {
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
                  <Mui.Typography
                    component="small"
                    variant="body2"
                    className="d-block text-color-grey-light font-weight-normal"
                  >
                    {item.createdAt
                      ? moment(item.createdAt).format("DD/MM/YYYY HH:mm a")
                      : null}
                  </Mui.Typography>
                </Mui.Typography>

                <Mui.Typography
                  component="h5"
                  variant="h5"
                  className={`flex-shrink-0  text-color-grey font-weight-medium ${
                    Mui.isWidthDown("md", this.props.width)
                      ? "w-100 mt-1 pl-4"
                      : " ml-4"
                  }`}
                >
                  {item?.createdBy?.fullname || "-"}
                </Mui.Typography>
              </Mui.Box>
            );
          })}
          {this.props.recentProductData?.length === 0 ? (
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
)(withTranslation()(Mui.withWidth()(RecentProduct)));
