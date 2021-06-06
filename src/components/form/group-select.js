import React from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";
import { IconChevronDown } from "../svg";

const GroupSelectField = ({
  label,
  options,
  optionLabel,
  variant,
  shrinkLabel = true,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [val, setVal] = React.useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
    helpers.setValue(event.target.value);
  };

  const renderSelectGroup = (data) => {
    const items = data?.children?.map((item) => {
      return (
        <Mui.MenuItem key={item.id} value={item.id}>
          {item.name}
        </Mui.MenuItem>
      );
    });
    return [
      <Mui.ListSubheader style={{ pointerEvents: "none" }}>
        {data.name}
      </Mui.ListSubheader>,
      items,
    ];
  };

  return (
    <Mui.FormControl
      error={meta.touched && meta.error ? true : false}
      variant={variant ? variant : "outlined"}
    >
      <Mui.InputLabel shrink={shrinkLabel} htmlFor="grouped-select">
        {label}
      </Mui.InputLabel>
      <Mui.Select
        id="grouped-select"
        value={val}
        onChange={handleChange}
        {...field}
        {...props}
        IconComponent={IconChevronDown}
        MenuProps={{
          className: "select-dropdown",
          getContentAnchorEl: null,

          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }}
      >
        {options?.map((item) => renderSelectGroup(item))}
      </Mui.Select>
      {meta.touched && meta.error ? (
        <Mui.FormHelperText error>
          {meta.touched && meta.error ? meta.error : null}
        </Mui.FormHelperText>
      ) : null}
    </Mui.FormControl>
  );
};

export default GroupSelectField;
