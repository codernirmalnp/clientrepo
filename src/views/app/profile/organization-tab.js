import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import {
  IconAdd,
  IconColorBuilding,
  IconColorCanteen,
  IconColorOrganization,
  IconMail,
  IconPin,
  IconUsero,
} from "../../../components/svg";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

const userData = {
  success: true,
  data: {
    id: 5,
    fullname: "Amit",
    phone: "7706323324",
    email: "amit@meeteo.io",
    status: 2,
    userBuildingCanteens: [
      {
        canteenId: [1, 3],
        canteens: [
          {
            id: 1,
            name: "Canteen 1",
            status: 18,
            buildingId: 1,
            locationInBuilding: "Lalitpur, Kumaripati",
            canteenTimeslots: [
              {
                id: 1,
                day: "sunday",
                canteenId: 1,
                openingTime: "18:00",
                closingTime: "18:00",
              },
              {
                id: 2,
                day: "monday",
                canteenId: 1,
                openingTime: "10:00",
                closingTime: "13:00",
              },
              {
                id: 3,
                day: "tuesday",
                canteenId: 1,
                openingTime: "07:00",
                closingTime: "17:00",
              },
              {
                id: 4,
                day: "wednesday",
                canteenId: 1,
                openingTime: "06:00",
                closingTime: "18:00",
              },
              {
                id: 5,
                day: "thursday",
                canteenId: 1,
                openingTime: "04:00",
                closingTime: "18:00",
              },
              {
                id: 6,
                day: "friday",
                canteenId: 1,
                openingTime: "05:00",
                closingTime: "19:00",
              },
              {
                id: 7,
                day: "saturday",
                canteenId: 1,
                openingTime: "05:00",
                closingTime: "17:00",
              },
            ],
          },
          {
            id: 3,
            name: "Canteen 3",
            status: 18,
            buildingId: 1,
            locationInBuilding: "Lalitpur, Kumaripati",
            canteenTimeslots: [
              {
                id: 15,
                day: "sunday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 16,
                day: "monday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 17,
                day: "tuesday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 18,
                day: "wednesday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 19,
                day: "thursday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 20,
                day: "friday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
              {
                id: 21,
                day: "saturday",
                canteenId: 3,
                openingTime: null,
                closingTime: null,
              },
            ],
          },
        ],
        buildings: {
          id: 1,
          name: "Kumaripati Branch",
          address: "1684 Lakeland Park Drive",
          status: 16,
          buildingOwners: [
            {
              id: 1,
              name: "Amit Rajbhandari",
              email: "amit.rajbhandari@idnepal.com",
              phone: "7706323324",
              buildingId: 1,
            },
          ],
        },
        buildingId: 1,
      },
    ],
    photo: [],
    organizations: {
      id: 1,
      name: "Pizza World",
      number: "235465461",
      status: "14",
      adminUser: [
        {
          name: "Amit Rajbhandari",
          email: "amit.rajbhandari@idnepal.com",
        },
      ],
    },
    role: {
      id: 2,
      name: {
        en: "Chef",
        no: "Chef",
      },
      description: "Chef",
      status: 12,
      statusConfigChoice: {
        id: 12,
        configChoice: "active",
        displayName: {
          en: "Active",
          no: "Aktiv",
        },
      },
    },
    country: {
      id: 160,
      name: "Norway",
      code: "NO",
      isdCode: "+47",
    },
    streetAddress: "Buddhanagar",
    postalCode: "44600",
    postalCity: "Kathmandu",
    isVerified: true,
    roleId: 2,
    createdBy: 1,
    createdAt: "2021-05-20T11:01:31.000000Z",
    countryId: 160,
    statusConfigChoice: {
      id: 2,
      configChoice: "active",
      displayName: {
        en: "Active",
        no: "Aktiv",
      },
    },
  },
  message: "User retrieved successfully",
};
class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = { buildingExpand: false, canteenExpand: false };
  }

  toggleBuidlingCollapse = (panel) => (event, isExpanded) => {
    this.setState({ buildingExpand: isExpanded ? panel : false });
  };

  toggleCanteenCollapse = (panel) => (event, isExpanded) => {
    this.setState({ canteenExpand: isExpanded ? panel : false });
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <Mui.Grid
          container
          spacing={2}
          wrap="nowrap"
          alignItems="center"
          className="mb-1"
        >
          <Mui.Grid item xs md>
            <Mui.Box
              width={51}
              height={51}
              component="figure"
              bgcolor="#C9C9C9"
              className="img-round svg-size-medium"
            >
              <Mui.Box
                component="span"
                display="flex"
                justifyContent="center"
                mt={1.9}
              >
                <IconColorOrganization />
              </Mui.Box>
            </Mui.Box>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={12}>
            <Mui.Typography
              component="h4"
              variant="h4"
              className="font-weight-medium"
            >
              {userData.data?.organizations?.name || ""}
              <Mui.Typography
                component="span"
                variant="body1"
                className="font-weight-normal text-color-grey d-block"
              >
                {t("ORGANIZATION.FORM.ORGANIZATION_NO")}:{" "}
                {userData.data?.organizations?.number || ""}
              </Mui.Typography>
            </Mui.Typography>
          </Mui.Grid>
        </Mui.Grid>

        <Mui.Grid container spacing={2} wrap="nowrap" alignItems="center">
          <Mui.Hidden mdDown>
            <Mui.Grid item xs md>
              <Mui.Box width={51} height={51} />
            </Mui.Grid>
          </Mui.Hidden>

          <Mui.Grid item xs={12} md={12}>
            {/* <Mui.Typography
              component="p"
              variant="subtitle2"
              className="mb-2 text-color-grey"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Mui.Typography> */}

            <Mui.Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              mt={5}
              mb={8}
            >
              <Mui.Typography
                component="h5"
                variant="h5"
                className="d-flex align-items-center mb-2 mr-5 font-weight-normal svg-size-small svg-color-primary"
              >
                <IconUsero />
                <span className="ml-1">
                  {userData.data?.organizations?.adminUser?.[0]?.name ||
                    ""}
                </span>
              </Mui.Typography>
              <Mui.Typography
                component="h5"
                variant="h5"
                className="d-flex align-items-center mb-2 font-weight-normal svg-size-small svg-color-primary"
              >
                <IconMail />
                <span className="ml-1 word-break-word">
                  {userData.data?.organizations?.adminUser?.[0]?.email ||
                    ""}
                </span>
              </Mui.Typography>
            </Mui.Box>

            {userData.data?.userBuildingCanteens?.map((item, index) => (
              <div key={index}>
                <Mui.Accordion
                  expanded={this.state.buildingExpand === item.buildingId}
                  onChange={this.toggleBuidlingCollapse(item.buildingId)}
                  className="accordion-colored primary"
                >
                  <Mui.AccordionSummary expandIcon={<IconAdd />}>
                    <Mui.Box
                      width={51}
                      height={51}
                      component="figure"
                      bgcolor="#C9C9C9"
                      className="flex-shrink-0 img-round svg-size-medium"
                    >
                      <Mui.Box
                        component="span"
                        display="flex"
                        justifyContent="center"
                        mt={1.9}
                      >
                        <IconColorBuilding />
                      </Mui.Box>
                    </Mui.Box>

                    <Mui.Typography
                      component="h3"
                      variant="h3"
                      className="ml-2 font-weight-medium"
                    >
                      <Mui.Typography
                        component="span"
                        variant="h4"
                        className="d-block mt-1 mb-2 text-color-primary font-weight-medium"
                      >
                        {t("BUILDING.TITLE")}
                      </Mui.Typography>
                      {item?.buildings?.name}
                    </Mui.Typography>
                  </Mui.AccordionSummary>
                  <Mui.AccordionDetails>
                    <Mui.Box
                      ml={Mui.isWidthDown("sm", this.props.width) ? "0" : 9}
                    >
                      <Mui.Typography component="p" variant="body1">
                        {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita */}
                      </Mui.Typography>

                      <Mui.Box
                        display="flex"
                        flexWrap="wrap"
                        alignItems="center"
                        mt={4}
                      >
                        <Mui.Typography
                          component="h5"
                          variant="h5"
                          className="d-flex align-items-center mb-2 mr-5 font-weight-normal svg-size-small svg-color-primary"
                        >
                          <IconUsero />
                          <span className="ml-1">
                            {item?.buildings?.buildingOwners?.[0]?.name || ""}
                          </span>
                        </Mui.Typography>

                        <Mui.Typography
                          component="h5"
                          variant="h5"
                          className="d-flex align-items-center mb-2 font-weight-normal svg-size-small svg-color-primary"
                        >
                          <IconMail />
                          <span className="ml-1 word-break-word">
                            {item?.buildings?.buildingOwners?.[0]?.email || ""}
                          </span>
                        </Mui.Typography>
                      </Mui.Box>
                    </Mui.Box>
                  </Mui.AccordionDetails>
                </Mui.Accordion>
                <Mui.Collapse
                  in={this.state.buildingExpand === item.buildingId}
                >
                  <Mui.Box
                    ml={Mui.isWidthDown("sm", this.props.width) ? "0" : 13}
                  >
                    {item?.canteens?.map((data, i) => (
                      <Mui.Accordion
                        key={i}
                        expanded={this.state.canteenExpand === data.id}
                        onChange={this.toggleCanteenCollapse(data.id)}
                        className="accordion-colored secondary"
                      >
                        <Mui.AccordionSummary expandIcon={<IconAdd />}>
                          <Mui.Box
                            width={51}
                            height={51}
                            display="flex"
                            justifyContent="center"
                            component="figure"
                            bgcolor="#C9C9C9"
                            className="img-round svg-size-medium"
                            pt={1}
                          >
                            <IconColorCanteen />
                          </Mui.Box>

                          <Mui.Typography
                            component="h3"
                            variant="h3"
                            className="ml-2 font-weight-medium"
                          >
                            <Mui.Typography
                              component="span"
                              variant="h4"
                              className="d-block mt-1 mb-2 text-color-primary font-weight-medium"
                            >
                              {t("CANTEEN.TITLE")}
                            </Mui.Typography>
                            {data?.name || ""}
                          </Mui.Typography>
                        </Mui.AccordionSummary>
                        <Mui.AccordionDetails>
                          <Mui.Box
                            width="100%"
                            ml={
                              Mui.isWidthDown("sm", this.props.width) ? "0" : 9
                            }
                          >
                            <Mui.Typography component="p" variant="body1">
                              {/* Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita */}
                            </Mui.Typography>

                            <Mui.Box display="flex" alignItems="center" mb={5}>
                              <Mui.Typography
                                component="h5"
                                variant="h5"
                                className="d-flex align-items-center font-weight-normal svg-size-small svg-color-primary"
                              >
                                <IconPin />
                                <span className="ml-1">
                                  {data?.locationInBuilding || ""}
                                </span>
                              </Mui.Typography>
                            </Mui.Box>

                            <Mui.Divider light={true} className="mb-3" />

                            <Mui.Typography
                              component="h6"
                              variant="h6"
                              className="mb-1 font-weight-medium"
                            >
                              {t("CANTEEN.TIME_SLOTS_LABEL")}
                            </Mui.Typography>

                            <Mui.TableContainer className="default-datatable">
                              <Mui.Table size={"medium"}>
                                <Mui.TableHead>
                                  <Mui.TableRow>
                                    <Mui.TableCell className="font-weight-normal ">
                                      {t("CANTEEN.FORM.OPENING_DAYS")}
                                    </Mui.TableCell>
                                    <Mui.TableCell className="font-weight-normal ">
                                      {t("CANTEEN.FORM.OPENING_TIME")}
                                    </Mui.TableCell>
                                    <Mui.TableCell className="font-weight-normal text-left">
                                      {t("CANTEEN.FORM.CLOSING_TIME")}
                                    </Mui.TableCell>
                                    <Mui.TableCell className="font-weight-normal ">
                                      {t("COMMON.FORM.STATUS")}
                                    </Mui.TableCell>
                                  </Mui.TableRow>
                                </Mui.TableHead>

                                <Mui.TableBody>
                                  {data?.canteenTimeslots?.map((slots, k) => (
                                    <Mui.TableRow key={k}>
                                      <Mui.TableCell className="text-transform-capitalize">
                                        {slots.day}
                                      </Mui.TableCell>
                                      <Mui.TableCell>
                                        {slots?.openingTime || "-"}
                                      </Mui.TableCell>
                                      <Mui.TableCell className="text-left">
                                        {slots?.closingTime || "-"}
                                      </Mui.TableCell>
                                      <Mui.TableCell>
                                        <span
                                          className={`status-bg ${
                                            slots?.status === 1
                                              ? "success"
                                              : "disabled"
                                          }`}
                                        >
                                          {slots?.status === 1
                                            ? t("COMMON.OPEN")
                                            : t("COMMON.CLOSED")}
                                        </span>
                                      </Mui.TableCell>
                                    </Mui.TableRow>
                                  ))}
                                </Mui.TableBody>
                              </Mui.Table>
                            </Mui.TableContainer>
                          </Mui.Box>
                        </Mui.AccordionDetails>
                      </Mui.Accordion>
                    ))}
                  </Mui.Box>
                </Mui.Collapse>
              </div>
            ))}
          </Mui.Grid>
        </Mui.Grid>
      </>
    );
  }
}
const mapStateToProps = ({ user }) => {
  const { userData } = user;
  return { userData };
};
export default connect(
  mapStateToProps,
  {}
)(withTranslation()(Mui.withWidth()(Organization)));
