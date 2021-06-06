import React, { useEffect } from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { IconCheck, IconChevronDown } from "../svg";

const SelectField = ({
  label,
  options,
  optionLabel,
  variant,
  callback,
  shrinkLabel = true,
  readonlyArr = [],
  ...props
}) => {
  const { i18n } = useTranslation();
  const [field, meta] = useField(props);

  useEffect(() => {
    if (callback) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.value]);

  return (
    <Mui.FormControl
      error={meta.touched && meta.error ? true : false}
      variant={variant ? variant : "outlined"}
    >
      <Mui.InputLabel shrink={shrinkLabel} htmlFor="select">
        {label}
      </Mui.InputLabel>
      <Mui.Select
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
        {options?.map((item, index) => {
          return (
            <Mui.MenuItem
              disabled={readonlyArr.indexOf(item.id) > -1}
              key={index}
              value={item.id}
            >
              {typeof item?.[optionLabel] === "object"
                ? item?.[optionLabel]?.[i18n.language] || ""
                : item?.[optionLabel]}

              <span className="icon-selected">
                <IconCheck />
              </span>
            </Mui.MenuItem>
          );
        })}
      </Mui.Select>
      {meta.touched && meta.error ? (
        <Mui.FormHelperText error>
          {meta.touched && meta.error ? meta.error : null}
        </Mui.FormHelperText>
      ) : null}
    </Mui.FormControl>
  );
};

export default SelectField;
