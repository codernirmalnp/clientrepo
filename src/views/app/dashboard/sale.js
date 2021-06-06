import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { IconInfo, IconMoreKebab } from "../../../components/svg";
import { withTranslation } from "react-i18next";
import { formatCurrency, ordinalSuffix } from "../../../helpers/util";
import moment from "moment";
class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    };
  }

  getTitle = (date) => {
    if (this.props.filter === "today") {
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("H a");
    } else if (this.props.filter === "thisWeek") {
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("dddd");
    } else if (this.props.filter === "thisMonth") {
      return (
        ordinalSuffix(Math.ceil(moment(date).date() / 7)) +
        " " +
        this.props.t("COMMON.WEEK")
      );
    } else if (this.props.filter === "thisYear") {
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("MMM");
    } else {
      return moment(date, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
    }
  };

  componentDidUpdate(previousProps) {
    if (previousProps.saleData !== this.props.saleData) {
      this.setState({ chartData: [] }, () => {
        this.props.saleData &&
          this.props.saleData.map((item, index) =>
            this.setState((prevState) => ({
              chartData: [
                ...prevState.chartData,
                {
                  name: this.getTitle(item.date),
                  value: item.total,
                  fullval: formatCurrency(item.total),
                  date: this.getTitle(item.date),
                },
              ],
            }))
          );
      });
    }
  }

  render() {
    const { t } = this.props;
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="chart-tooltip">
            <Mui.Typography
              component="span"
              variant="h3"
              className="label"
            >{`${payload[0].payload.fullval}`}</Mui.Typography>
            <Mui.Typography
              component="span"
              variant="body1"
              className="desc"
            >{`${payload[0].payload.date}`}</Mui.Typography>
          </div>
        );
      }
      return null;
    };
    return (
      <Mui.Paper className="widget-card">
        <Mui.IconButton size="small" className="btn-menu">
          <IconMoreKebab />
        </Mui.IconButton>

        <Mui.Typography
          component="h3"
          variant="h3"
          className="mb-4 font-weight-normal title"
        >
          {t("DASHBOARD.SALE_OVERVIEW")}
          <Mui.Tooltip
            title={t("DASHBOARD.SALE_OVERVIEW_TOOLTIP")}
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
          <Mui.Typography
            component="small"
            variant="body1"
            className="d-block text-color-grey-light font-weight-normal"
          >
            {t("DASHBOARD.OVERALL_INFORMATION")}
          </Mui.Typography>
        </Mui.Typography>

        <ResponsiveContainer height={330}>
          <AreaChart
            data={this.state.chartData}
            margin={{
              left: -10,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F19E39" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F19E39" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tick={{ fill: "#9F9F9F" }} />
            <YAxis axisLine={false} tick={{ fill: "#9F9F9F" }} />
            <CartesianGrid strokeDasharray="8 8" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              strokeWidth={3}
              stroke="#F19E39"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <ReferenceArea strokeOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </Mui.Paper>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(withTranslation()(Sale));
