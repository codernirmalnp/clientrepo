import React, { Component } from "react";
import { connect } from "react-redux";
import * as Mui from "@material-ui/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import {
  IconArrowUp,
  IconArrowDown,
  IconInfo,
  IconMoreKebab,
} from "../../../components/svg";
import { withTranslation } from "react-i18next";
import { formatCurrency, ordinalSuffix } from "../../../helpers/util";
import moment from "moment";

class CustomerRate extends Component {
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
    if (
      previousProps.customerRepeatRateData !== this.props.customerRepeatRateData
    ) {
      this.setState({ chartData: [] }, () => {
        this.props.customerRepeatRateData?.chart?.map((item, index) =>
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
          className="mb-3 font-weight-normal title"
        >
          {t("DASHBOARD.REPEAT_CUSTOMER_RATE")}
          <Mui.Tooltip
            title={t("DASHBOARD.REPEAT_CUSTOMER_RATE_TOOLTIP")}
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
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Mui.Typography
            component="h3"
            variant="h3"
            className="mb-3 font-weight-semi-bold title"
          >
            {this.props.customerRepeatRateData?.percent || 0}%
            <Mui.Typography
              component="span"
              variant="h6"
              className="d-block mt-1 text-color-grey font-weight-normal"
            >
              {t("DASHBOARD.CUSTOMERS")}
            </Mui.Typography>
          </Mui.Typography>

          <Mui.Typography
            component="h4"
            variant="h4"
            className="font-weight-medium text-color-success"
          >
            {this.props.customerRepeatRateData?.comparison === "high" ? (
              <span className="mr-1 svg-size-xs svg-color-danger">
                <IconArrowUp />
              </span>
            ) : null}
            {this.props.customerRepeatRateData?.comparison === "low" ? (
              <span className="mr-1 svg-size-xs svg-color-danger">
                <IconArrowDown />
              </span>
            ) : null}
            {this.props.customerRepeatRateData?.difference || 0}%
          </Mui.Typography>
        </Mui.Box>

        <ResponsiveContainer height={180}>
          <LineChart
            data={this.state.chartData}
            margin={{
              left: -10,
            }}
          >
            <CartesianGrid strokeDasharray="8 8" />
            <XAxis dataKey="name" tick={{ fill: "#9F9F9F" }} />
            <YAxis tick={{ fill: "#9F9F9F" }} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke="#F19E39" />
            <ReferenceArea strokeOpacity={0.3} />
          </LineChart>
        </ResponsiveContainer>
      </Mui.Paper>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(withTranslation()(CustomerRate));
