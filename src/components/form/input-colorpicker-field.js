import React from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";
import { SketchPicker } from "react-color";

const InputColorpickerField = ({
  label,
  variant,
  callback,
  shrinkLabel = true,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onColorChange = (color) => {
    helpers.setValue(color.hex);
    if (callback) {
      callback(color.hex, color.hsl.h, color.hsl.s, color.hsl.l);
    }
  };

  return (
    <>
      <Mui.TextField
        className="color-picker"
        label={label ? label : null}
        variant={variant ? variant : "outlined"}
        helperText={meta.touched && meta.error ? meta.error : null}
        error={meta.touched && meta.error ? true : false}
        {...field}
        {...props}
        InputLabelProps={shrinkLabel ? { shrink: true } : {}}
        InputProps={{
          endAdornment: (
            <Mui.InputAdornment onClick={(e) => onOpen(e)} position="start">
              <span
                className="picker"
                style={{
                  backgroundColor: field.value ? field.value : "#000",
                }}
              ></span>
            </Mui.InputAdornment>
          ),
        }}
      />
      <Mui.Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        <SketchPicker
          color={field.value ? field.value : ""}
          onChangeComplete={(color) => onColorChange(color)}
        />
      </Mui.Menu>
    </>
  );
};

export default InputColorpickerField;
