import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/breadcrumb";
import { withTranslation } from "react-i18next";
import { getUser } from "../../../reduxs/actions";
import { Link } from "react-router-dom";
import {
  IconBuilding,
  IconCanteen,
  IconChevronLeft,
  IconMail,
  IconPhone,
  IconPin,
} from "../../../components/svg";

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
class ViewUser extends Component {
  constructor(props) {
    super(props);
    if (this.props.match.params.id) {
      this.props.getUser(this.props.match.params.id);
    }
  }

  render() {
    const { t, i18n } = this.props;
    return (
      <>
        <Breadcrumb
          title={t("PERMISSIONS.modules.userManagement")}
          paths={[
            {
              title: t("PERMISSIONS.modules.userManagement"),
              page: `/user-management/user`,
            },
            {
              title: t("PERMISSIONS.sections.user"),
              page: `/user-management/user`,
            },
            {
              title: t("PERMISSIONS.actions.view"),
            },
          ]}
        />

        <Mui.Card className="default-card spacing-md pb-5">
          <Mui.Box
            className="mb-4"
            width="100%"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Mui.IconButton
              className="border-1 border-color-grey"
              type="button"
              component={Link}
              to={"/user-management/user"}
              size="small"
              style={{ padding: 6, marginRight: 15 }}
            >
              <Mui.Box
                width="1.2rem"
                className="svg-color-grey svg-size-flexible line-height-null"
              >
                <IconChevronLeft />
              </Mui.Box>
            </Mui.IconButton>

            <Mui.Typography
              component="h5"
              variant="h5"
              className="mr-auto font-weight-medium"
            >
              {t("USER.INFO_LABEL")}
            </Mui.Typography>

            <Mui.Button
              className={`btn-default ${
                Mui.isWidthDown("sm", this.props.width) ? "mt-2" : "ml-2"
              }`}
              color="primary"
              type="button"
              variant="outlined"
              disableElevation
              component={Link}
              to={`/user-management/user/edit/${this.props.match.params.id}`}
            >
              {t("COMMON.FORM.ACTION.EDIT")}
            </Mui.Button>
          </Mui.Box>

          <Mui.Box
            display="flex"
            flexDirection={
              Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
            }
          >
            <Mui.Avatar
              className={`img-size-xl ${
                Mui.isWidthDown("xs", this.props.width) ? "mb-5" : "mr-5"
              }`}
              src={
                this.props.userData?.photo?.length > 0 &&
                this.props.userData?.photo[0]?.url
                  ? this.props.userData?.photo[0]?.url
                  : "/static/images/avatar/1.jpg"
              }
              alt={this.props.userData?.fullname || ""}
            />

            <Mui.Box display="flex" flexWrap="wrap">
              <Mui.Typography
                component="h1"
                variant="h1"
                className={`mb-3 svg-color-primary font-weight-medium ${
                  Mui.isWidthDown("xs", this.props.width)
                    ? "flex-direction-column"
                    : ""
                }`}
              >
                <Mui.Typography
                  component="small"
                  variant="body1"
                  className="d-block text-color-grey text-transform-uppercase"
                >
                  {this.props.userData?.role?.name?.[i18n.language] || ""}
                </Mui.Typography>

                {this.props.userData?.fullname || "-"}

                <Mui.Typography
                  component="span"
                  variant="body1"
                  className={`status-bg success text-transform-uppercase ${
                    Mui.isWidthDown("xs", this.props.width)
                      ? "mt-2"
                      : "ml-2 align-self-end"
                  }`}
                >
                  {this.props.userData?.isVerified
                    ? t("COMMON.VERIFIED")
                    : t("COMMON.NOT_VERIFIED")}
                </Mui.Typography>
              </Mui.Typography>

              <Mui.Typography
                component="h5"
                variant="h5"
                className="w-100 d-flex mb-2  svg-color-primary text-color-grey font-weight-normal"
              >
                <span className="flex-shrink-0 mr-2">
                  <IconPin />
                </span>
                {this.props.userData?.postalCode || ""}{" "}
                {this.props.userData?.streetAddress || ""}{" "}
                {this.props.userData?.postalCity || ""}{" "}
                {this.props.userData?.country?.name || "-"}
              </Mui.Typography>

              <Mui.Box
                display="flex"
                flexDirection={
                  Mui.isWidthDown("sm", this.props.width) ? "column" : "row"
                }
              >
                <Mui.Typography
                  component="h5"
                  variant="h5"
                  className="d-flex mb-2  mr-5 svg-color-primary font-weight-normal"
                >
                  <span className="flex-shrink-0 mr-2">
                    <IconMail />
                  </span>
                  {this.props.userData?.email || "-"}
                </Mui.Typography>

                <Mui.Typography
                  component="h5"
                  variant="h5"
                  className="d-flex mb-2  mr-5 svg-color-primary font-weight-normal"
                >
                  <span className="flex-shrink-0 mr-2">
                    <IconPhone />
                  </span>
                  {this.props.userData?.country?.isdCode || ""}{" "}
                  {this.props.userData?.phone || "-"}
                </Mui.Typography>
              </Mui.Box>
            </Mui.Box>
          </Mui.Box>

          <Mui.Divider light={true} className="mt-4 mb-4" />

          <Mui.Box
            display="flex"
            flexDirection={
              Mui.isWidthDown("xs", this.props.width) ? "column" : "row"
            }
          >
            <Mui.Typography
              component="h5"
              variant="h5"
              className="d-flex mb-2  mr-5 svg-color-primary font-weight-normal"
            >
              <span className="flex-shrink-0">
                <IconBuilding />
              </span>
              <span className="ml-2">
                <Mui.Typography
                  component="small"
                  variant="body2"
                  className="d-block text-color-grey text-transform-uppercase"
                >
                  {t("BUILDING.TITLE")}
                </Mui.Typography>

                {userData.data?.userBuildingCanteens?.map((item, i) => {
                  return (
                    <span key={i}>
                      {item?.buildings?.name}
                      {i + 1 < userData.data?.userBuildingCanteens?.length
                        ? ", "
                        : ""}
                    </span>
                  );
                })}
              </span>
            </Mui.Typography>

            <Mui.Typography
              component="h5"
              variant="h5"
              className="d-flex mb-2  mr-5 svg-color-primary font-weight-normal"
            >
              <span className="flex-shrink-0">
                <IconCanteen />
              </span>
              <span className="ml-2">
                <Mui.Typography
                  component="small"
                  variant="body2"
                  className="d-block text-color-grey text-transform-uppercase"
                >
                  {t("USER.FORM.CANTEEN")}
                </Mui.Typography>

                {userData.data?.userBuildingCanteens?.map(
                  (building, j) => {
                    return (
                      <span key={j}>
                        {building?.canteens.map((canteen, k) => {
                          return (
                            <span key={k}>
                              {canteen.name}
                              {k + 1 < building?.canteens?.length ? ", " : ""}
                            </span>
                          );
                        })}
                        {j + 1 <
                        userData.data?.userBuildingCanteens?.length
                          ? ", "
                          : ""}
                      </span>
                    );
                  }
                )}
              </span>
            </Mui.Typography>
          </Mui.Box>
        </Mui.Card>
      </>
    );
  }
}
const mapStateToProps = ({ user, shared }) => {
  const { permission } = shared;
  const { userData, loading, error } = user;
  return { permission, userData, loading, error };
};
export default connect(mapStateToProps, { getUser })(
  withTranslation()(Mui.withWidth()(ViewUser))
);
