import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import * as MuiLab from "@material-ui/lab";
import { connect } from "react-redux";
class RecentActivity extends Component {
  render() {
    return (
      <>
        <MuiLab.Timeline align="left" className="recent-activity">
          <Mui.Typography
            component="span"
            className="recent-activity__title today"
          >
            Today
          </Mui.Typography>

          <MuiLab.TimelineItem className="today">
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem className="today">
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                5:30 pm
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Updated</span>
                Personal details
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod empor incididunt ut labore et dolore magna aliqua.
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <Mui.Typography component="span" className="recent-activity__title">
            Yesterday
          </Mui.Typography>
          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <Mui.Typography component="span" className="recent-activity__title">
            2nd May 2021
          </Mui.Typography>
          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <Mui.Typography component="span" className="recent-activity__title">
            25th April 2021
          </Mui.Typography>
          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>

          <MuiLab.TimelineItem>
            <MuiLab.TimelineOppositeContent>
              <Mui.Typography
                component="span"
                variant="subtitle2"
                className="recent-activity__time"
              >
                9:30 am
              </Mui.Typography>
            </MuiLab.TimelineOppositeContent>

            <MuiLab.TimelineSeparator>
              <MuiLab.TimelineDot variant="outlined"></MuiLab.TimelineDot>
              <MuiLab.TimelineConnector />
            </MuiLab.TimelineSeparator>

            <MuiLab.TimelineContent>
              <Mui.Typography
                component="h4"
                variant="h4"
                className="mb-1 font-weight-normal"
              >
                <span className="mr-1 activity-state">Created</span>
                new food item
              </Mui.Typography>
              <Mui.Typography
                component="p"
                variant="body1"
                className="text-color-grey-light font-weight-normal"
              >
                Food: Red Lobster
              </Mui.Typography>
            </MuiLab.TimelineContent>
          </MuiLab.TimelineItem>
        </MuiLab.Timeline>
      </>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps, {})(Mui.withWidth()(RecentActivity));
