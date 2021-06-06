import React from "react";
import * as Mui from "@material-ui/core";
import { IconFilter } from "../../svg";
import { useTranslation } from "react-i18next";

const ColumnFilter = (props) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openFilterMenu, setOpenFilterMenu] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenFilterMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenFilterMenu(false);
  };

  return (
    <>
      <Mui.IconButton
        color="primary"
        variant="outlined"
        className="btn-icon-square ml-4"
        onClick={handleClick}
      >
        <IconFilter />
      </Mui.IconButton>

      <Mui.Popover
        classes={{ root: "column-filter" }}
        open={openFilterMenu}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Mui.Box display="flex" justifyContent="space-between">
          <Mui.Typography
            component="h6"
            varient="body1"
            className="font-weight-medium"
          >
            {t("COMMON.INCLUDE_SHOW")}
          </Mui.Typography>

          <IconFilter />
        </Mui.Box>

        <div className="pl-2 pr-2">
          <Mui.Divider className="mt-2 mb-2" />

          <Mui.Grid container spacing={4}>
            {props.headers?.map((head, i) => (
              <Mui.Grid key={i} item xs={12} sm={6}>
                <Mui.FormControlLabel
                  control={<Mui.Checkbox name={head.id} color="primary" />}
                  label={head.label}
                />
              </Mui.Grid>
            ))}
          </Mui.Grid>

          <Mui.Divider className="mt-2 mb-2" />

          <Mui.Typography
            component="p"
            variant="body2"
            className="text-center text-color-muted"
          >
            {t("COMMON.COLUMN_FILTER_INFO")}
          </Mui.Typography>
        </div>
      </Mui.Popover>
    </>
  );
};

export default ColumnFilter;
