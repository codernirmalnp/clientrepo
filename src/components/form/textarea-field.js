import React from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";

const TextareaField = ({
  label,
  rowsMax = "",
  shrinkLabel = true,
  // charLimit = "",
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <Mui.TextField
      multiline
      rows={5}
      rowsMax={rowsMax}
      label={label ? label : null}
      variant="outlined"
      helperText={
        <span className="d-flex justify-content-between">
          <span>{meta.touched && meta.error ? meta.error : ""}</span>
          {/* {charLimit !== "" && (
            <span>
              {field.value ? field.value.length : 0} / {charLimit}
            </span>
          )} */}
        </span>
      }
      error={meta.touched && meta.error ? true : false}
      InputLabelProps={shrinkLabel ? { shrink: true } : {}}
      // inputProps={{ maxLength: charLimit }}
      {...field}
      {...props}
    />
  );
};

export default TextareaField;
