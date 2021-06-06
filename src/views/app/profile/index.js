import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { getUser } from "../../../reduxs/actions";
import Breadcrumb from "../../../components/breadcrumb";
import UserInfo from "./user-info";
import RecentActivity from "./recent-tab";
import Organization from "./organization-tab";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.props.getUser(currentUser.id);
  }

  toggle = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <Breadcrumb
          title={t("PERMISSIONS.modules.userManagement")}
          paths={[
            {
              title: t("PERMISSIONS.sections.profile"),
            },
          ]}
        />
        <Mui.Grid container spacing={4}>
          <Mui.Grid
            item
            xs={12}
            md={4}
            className={Mui.isWidthDown("sm", this.props.width) ? "mb-4" : ""}
          >
            <UserInfo />
          </Mui.Grid>

          <Mui.Grid item xs={12} md={8}>
            <Mui.Card className="default-card spacing-md">
              <Mui.Tabs
                value={this.state.tab}
                onChange={this.toggle}
                variant="scrollable"
                indicatorColor="primary"
                scrollButtons={
                  Mui.isWidthUp("md", this.props.width) ? "auto" : "on"
                }
                className="default-tab-outlined"
              >
                <Mui.Tab label={t("PROFILE.RECENT_ACTIVITY")} />
                <Mui.Tab label={t("PROFILE.ORGANIZATION")} />
              </Mui.Tabs>

              {this.state.tab === 0 ? <RecentActivity /> : null}
              {this.state.tab === 1 ? <Organization /> : null}
            </Mui.Card>
          </Mui.Grid>
        </Mui.Grid>
      </>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { getUser })(
  withTranslation()(Mui.withWidth()(Profile))
);
