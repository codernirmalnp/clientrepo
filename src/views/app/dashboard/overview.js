import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import { withTranslation } from "react-i18next";
import {
  IconBookProduct,
  IconFoodScan,
  IconIncome,
  IconMoreKebab,
} from "../../../components/svg";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
import { formatCurrency, numberWithCommas } from "../../../helpers/util";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
// ];
class Overview extends Component {
  render() {
    const { t } = this.props;
    return (
      <Mui.Paper className="widget-card">
        <Mui.IconButton size="small" className="btn-menu">
          <IconMoreKebab />
        </Mui.IconButton>
        <Mui.Grid container spacing={2}>
          <Mui.Grid
            item
            xs={12}
            sm
            className={`${
              Mui.isWidthDown("xs", this.props.width) ? "mb-1 mt-2" : ""
            }`}
          >
            <Mui.Box display="flex" alignItems="flex-start">
              <Mui.Box
                width={33}
                height={33}
                component="span"
                className="svg-size-fill svg-color-primary mr-2"
              >
                <IconIncome />
              </Mui.Box>
              <Mui.Typography
                component="h3"
                variant="h3"
                className="text-color-grey font-weight-normal title"
              >
                {t("DASHBOARD.TOTAL_INCOME")}

                <Mui.Typography
                  component="span"
                  variant="h2"
                  className="d-block text-color-default font-weight-bold title-large mt-2"
                >
                  {formatCurrency(this.props.overviewData?.income)}
                </Mui.Typography>

                {/* <Mui.Typography
                  component="small"
                  variant="body1"
                  className="d-block text-color-grey-light font-weight-normal"
                >
                  35%{" "}
                  {this.props.filter === "today" ? t("DASHBOARD.TODAY") : null}
                  {this.props.filter === "thisWeek"
                    ? t("DASHBOARD.THIS_WEEK")
                    : null}
                  {this.props.filter === "thisMonth"
                    ? t("DASHBOARD.THIS_MONTH")
                    : null}
                  {this.props.filter === "thisYear"
                    ? t("DASHBOARD.THIS_YEAR")
                    : null}
                </Mui.Typography> */}
              </Mui.Typography>

              {/* <ResponsiveContainer width={100} height={50}>
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#F19E39"
                    strokeWidth={5}
                    strokeLinecap="round"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </Mui.Box>
          </Mui.Grid>

          <Mui.Grid
            item
            xs={12}
            sm
            className={`${
              Mui.isWidthDown("xs", this.props.width) ? "mb-1 mt-2" : ""
            }`}
          >
            <Mui.Box display="flex" alignItems="flex-start">
              <Mui.Box
                width={38}
                height={38}
                component="span"
                className="svg-size-fill svg-color-primary mr-2"
              >
                <IconFoodScan />
              </Mui.Box>

              <Mui.Typography
                component="h3"
                variant="h3"
                className="text-color-grey font-weight-normal title"
              >
                {t("DASHBOARD.TOTAL_FOOD_SCANNED")}

                <Mui.Typography
                  component="span"
                  variant="h2"
                  className="d-block text-color-default font-weight-bold title-large mt-2"
                >
                  {this.props.overviewData?.scannedFood
                    ? numberWithCommas(this.props.overviewData?.scannedFood)
                    : 0}
                </Mui.Typography>

                {/* <Mui.Typography
                  component="small"
                  variant="body1"
                  className="d-block text-color-grey-light font-weight-normal"
                >
                  14%{" "}
                  {this.props.filter === "today" ? t("DASHBOARD.TODAY") : null}
                  {this.props.filter === "thisWeek"
                    ? t("DASHBOARD.THIS_WEEK")
                    : null}
                  {this.props.filter === "thisMonth"
                    ? t("DASHBOARD.THIS_MONTH")
                    : null}
                  {this.props.filter === "thisYear"
                    ? t("DASHBOARD.THIS_YEAR")
                    : null}
                </Mui.Typography> */}
              </Mui.Typography>

              {/* <ResponsiveContainer width={100} height={50}>
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#F19E39"
                    strokeWidth={5}
                    strokeLinecap="round"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer> */}
            </Mui.Box>
          </Mui.Grid>

          <Mui.Grid
            item
            xs={12}
            sm
            className={`${
              Mui.isWidthDown("xs", this.props.width) ? "mb-1 mt-2" : ""
            }`}
          >
            <Mui.Box display="flex" alignItems="flex-start">
              <Mui.Box
                width={33}
                height={33}
                component="span"
                className="svg-size-fill svg-color-primary mr-2"
              >
                <IconBookProduct />
              </Mui.Box>

              <Mui.Typography
                component="h3"
                variant="h3"
                className="text-color-grey font-weight-normal title"
              >
                {t("DASHBOARD.TOTAL_FOOD_ADDED")}

                <Mui.Typography
                  component="span"
                  variant="h2"
                  className="d-block text-color-default font-weight-bold title-large mt-2"
                >
                  {this.props.overviewData?.foodAdded
                    ? numberWithCommas(this.props.overviewData?.foodAdded)
                    : 0}
                </Mui.Typography>

                {/* <Mui.Typography
                  component="small"
                  variant="body1"
                  className="d-block text-color-grey-light font-weight-normal"
                >
                  35%{" "}
                  {this.props.filter === "today" ? t("DASHBOARD.TODAY") : null}
                  {this.props.filter === "thisWeek"
                    ? t("DASHBOARD.THIS_WEEK")
                    : null}
                  {this.props.filter === "thisMonth"
                    ? t("DASHBOARD.THIS_MONTH")
                    : null}
                  {this.props.filter === "thisYear"
                    ? t("DASHBOARD.THIS_YEAR")
                    : null}
                </Mui.Typography> */}
              </Mui.Typography>

              {/* <ResponsiveContainer width={100} height={50}>
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="amt"
                    stroke="#F19E39"
                    strokeWidth={5}
                    strokeLinecap="round"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer> */}
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
export default connect(mapStateToProps, {})(withTranslation()(Overview));
