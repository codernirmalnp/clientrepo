import React from "react";
import * as Mui from "@material-ui/core";

const UserAvatarCell = (props) => {
  const { data } = props;

  return (
    <Mui.Box display="flex" component="span">
      <Mui.Avatar
        alt={data?.fullname || ""}
        src={
          data?.photo?.length > 0 && data?.photo[0]?.url
            ? data?.photo[0]?.url
            : "/static/images/avatar/1.jpg"
        }
        className="mr-2 font-weight-normal background-color-primary"
      />
      <Mui.Typography
        component="h6"
        varient="subtitle2"
        className="font-weight-medium"
      >
        {data.fullname}
        <Mui.Typography
          component="small"
          variant="body2"
          className="d-block text-color-muted font-weight-light"
        >
          {data.email}
        </Mui.Typography>
      </Mui.Typography>
    </Mui.Box>
  );
};

export default UserAvatarCell;
