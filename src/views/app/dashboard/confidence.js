import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import { IconMoreKebab } from "../../../components/svg";
import { withTranslation } from "react-i18next";

class Confidence extends Component {
  render() {
    const { t } = this.props;

    const setConfidenceLevel = (lvl) => {
      if (lvl >= 70) {
        return "😊";
      } else if (lvl >= 50) {
        return "🙂";
      } else {
        return "🙁";
      }
    };
    return (
      <Mui.Paper className="widget-card">
        <Mui.IconButton size="small" className="btn-menu">
          <IconMoreKebab />
        </Mui.IconButton>

        <Mui.Grid container spacing={2}>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Typography
              component="h3"
              variant="h3"
              className="mb-2 text-color-grey font-weight-normal title"
            >
              {t("DASHBOARD.CONFIDENCE_LEVEL")}
            </Mui.Typography>
            <Mui.Typography
              component="small"
              variant="body1"
              className="d-block text-color-grey-light font-weight-normal"
            >
              {t("DASHBOARD.BASED_ON_EACH_SCAN")}
            </Mui.Typography>
          </Mui.Grid>

          <Mui.Grid item xs={12} md={8}>
            <Mui.Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              className="circular-progress-chart dotted-rail"
            >
              <Mui.Box height={78} className="semi-circle">
                <span className="status-lvl">
                  {setConfidenceLevel(
                    this.props.overviewData?.confidentLevel || 0
                  )}
                </span>

                <Mui.CircularProgress
                  size={156}
                  thickness={3.5}
                  variant="determinate"
                  value={
                    this.props.overviewData?.confidentLevel
                      ? this.props.overviewData?.confidentLevel * 0.5
                      : 0
                  }
                />
              </Mui.Box>

              <Mui.Box
                width={156}
                display="flex"
                alignItems="flex-end"
                justifyContent="space-between"
                className="mt-1"
              >
                <Mui.Typography
                  component="span"
                  variant="body2"
                  className="text-color-grey font-weight-medium"
                >
                  0%
                </Mui.Typography>

                <Mui.Typography component="h5" variant="h5">
                  {this.props.overviewData?.confidentLevel || 0}%
                </Mui.Typography>

                <Mui.Typography
                  component="span"
                  variant="body2"
                  className="text-color-grey font-weight-medium"
                >
                  100%
                </Mui.Typography>
              </Mui.Box>
            </Mui.Box>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Paper>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(withTranslation()(Confidence));
