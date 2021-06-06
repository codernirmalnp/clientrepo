import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import Overview from "./overview";
import Confidence from "./confidence";
import Sale from "./sale";
import BestProduct from "./best-product";
import RecentProduct from "./recent-product";
import PurchaseTypeSale from "./purchase-type-sale";
import CustomerRate from "./customer-rate";
import BestTenant from "./best-tenant";
import { Filter, MultipleFilter } from "../../../components/filter";
import Datepicker from "../../../components/datepicker";
import moment from "moment";
import { IconFilter } from "../../../components/svg";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canteenId: [],
      showFilter: false,
      filter: "today",
      customFromDate: null,
      customToDate: null,
    };
  }

  handleFilter = (event) => {
    if (event.target.value !== "custom") {
      this.setState(
        {
          filter: event.target.value,
          customFromDate: null,
          customToDate: null,
        },
        () => this.refetch()
      );
    } else {
      this.setState({ filter: event.target.value });
    }
  };

  handleFromDateChange = (date) => {
    this.setState({ customFromDate: date }, () => {
      if (this.state.customFromDate && this.state.customToDate) {
        this.refetch();
      }
    });
  };

  handleToDateChange = (date) => {
    this.setState({ customToDate: date }, () => {
      if (this.state.customFromDate && this.state.customToDate) {
        this.refetch();
      }
    });
  };
  render() {
    const { t } = this.props;
    return (
      <>
        <Mui.Box
          display="flex"
          flexDirection={
            Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
          }
          justifyContent="space-between"
        >
          <Mui.Typography
            component="h1"
            variant="h1"
            className="mb-4 font-weight-medium"
          >
            <Mui.Typography
              component="span"
              variant="h1"
              className="font-weight-normal"
            >
              {t("DASHBOARD.HELLO")} {this.props.user?.name || ""},
            </Mui.Typography>{" "}
            {t("DASHBOARD.WELCOME_BACK")}
          </Mui.Typography>

          <Mui.Button
            variant="outlined"
            className="mb-2 text-transform-none font-weight-normal align-self-end"
            onClick={() =>
              this.setState((prevState) => ({
                showFilter: !prevState.showFilter,
              }))
            }
          >
            {t("COMMON.FILTER")}
            <span className="ml-1 svg-size-small line-height-null">
              <IconFilter />
            </span>
          </Mui.Button>
        </Mui.Box>

        <Mui.Collapse in={this.state.showFilter}>
          <Mui.Paper className="default-card spacing-md mb-3 dash-filter">
            <Mui.Grid container spacing={4}>
              <Mui.Grid
                item
                xs={12}
                sm={4}
                md={3}
                lg={2}
                className={`form-group`}
              >
                <Filter
                  label={t("COMMON.FILTER")}
                  value={this.state.filter}
                  onFilter={this.handleFilter}
                  options={[
                    { id: "today", name: t("DASHBOARD.TODAY") },
                    { id: "thisWeek", name: t("DASHBOARD.THIS_WEEK") },
                    { id: "thisMonth", name: t("DASHBOARD.THIS_MONTH") },
                    { id: "thisYear", name: t("DASHBOARD.THIS_YEAR") },
                    { id: "custom", name: t("DASHBOARD.CUSTOM") },
                  ]}
                />
              </Mui.Grid>
              {this.state.filter === "custom" ? (
                <>
                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    className={`form-group`}
                  >
                    <Datepicker
                      label={t("COMMON.DATE_FROM")}
                      value={this.state.customFromDate}
                      onDateChange={this.handleFromDateChange}
                    />
                  </Mui.Grid>

                  <Mui.Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    className={`form-group`}
                  >
                    <Datepicker
                      label={t("COMMON.DATE_TO")}
                      value={this.state.customToDate}
                      minDate={this.state.customFromDate}
                      onDateChange={this.handleToDateChange}
                    />
                  </Mui.Grid>
                </>
              ) : null}
              <Mui.Grid
                item
                xs={12}
                sm={4}
                md={3}
                lg={2}
                className={`form-group ${
                  Mui.isWidthDown("sm", this.props.width) ? "mb-3" : ""
                }`}
              >
                <Filter
                  label={t("BUILDING.TITLE")}
                  value={this.state.buildingId}
                  onFilter={this.handleBuildingFilter}
                  options={this.props.buildings}
                  displayEmpty={true}
                />
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Paper>
        </Mui.Collapse>

        <Mui.Grid container spacing={4}>
          <Mui.Grid item xs={12} md={8}>
            <Overview filter={this.state.filter} />
          </Mui.Grid>

          <Mui.Grid item xs={12} md={4}>
            <Confidence />
          </Mui.Grid>
        </Mui.Grid>

        <Mui.Grid container spacing={4}>
          <Mui.Grid item xs={12} md={8}>
            <Sale filter={this.state.filter} />
          </Mui.Grid>

          <Mui.Grid item xs={12} md={4}>
            <BestProduct />
            <RecentProduct />
          </Mui.Grid>
        </Mui.Grid>

        <Mui.Grid container spacing={4}>
          <Mui.Grid item xs={12} md={4}>
            <PurchaseTypeSale />
          </Mui.Grid>

          <Mui.Grid item xs={12} md={4}>
            <BestTenant />
          </Mui.Grid>

          <Mui.Grid item xs={12} md={4}>
            <CustomerRate filter={this.state.filter} />
          </Mui.Grid>
        </Mui.Grid>
      </>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};
export default connect(
  mapStateToProps,
  {}
)(withTranslation()(Mui.withWidth()(Dashboard)));
