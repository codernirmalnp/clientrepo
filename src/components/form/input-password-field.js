import React, { useState } from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";
import { IconEye, IconEyeOff, IconLock } from "../svg";

const InputPasswordField = ({
  label,
  variant,
  shrinkLabel = true,
  showStartAdornment = false,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState("password");

  const pwdToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Mui.TextField
      type={type}
      label={label ? label : null}
      InputLabelProps={shrinkLabel ? { shrink: true } : {}}
      InputProps={
        showStartAdornment
          ? {
              startAdornment: (
                <Mui.InputAdornment position="start">
                  <IconLock />
                </Mui.InputAdornment>
              ),
              endAdornment: (
                <Mui.InputAdornment position="end">
                  <Mui.IconButton onClick={pwdToggle} edge="end">
                    {type === "password" ? <IconEyeOff /> : <IconEye />}
                  </Mui.IconButton>
                </Mui.InputAdornment>
              ),
            }
          : {
              endAdornment: (
                <Mui.InputAdornment position="end">
                  <Mui.IconButton onClick={pwdToggle} edge="end">
                    {type === "password" ? <IconEyeOff /> : <IconEye />}
                  </Mui.IconButton>
                </Mui.InputAdornment>
              ),
            }
      }
      variant={variant ? variant : "outlined"}
      helperText={meta.touched && meta.error ? meta.error : null}
      error={meta.touched && meta.error ? true : false}
      {...field}
      {...props}
    />
  );
};

export default InputPasswordField;
