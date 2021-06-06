import React, { useState, useEffect } from "react";
import * as Mui from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useField } from "formik";
import { IconCheck } from "../svg";
// import { IconCheck, IconChevronDown } from "../svg";

const AutocompleteSelectField = ({
  options,
  label,
  callback,
  variant,
  shrinkLabel = false,
  disabled = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (options?.length > 0 && field?.value) {
      options.forEach((item) => {
        if (field.value === item.id) {
          setVal(item);
        }
      });
      if (callback) {
        callback();
      }
    }
    // While form reset manually
    if (field.value === "") {
      setVal("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, field.value]);

  const handleChange = (event, selectedOption) => {
    if (selectedOption) {
      helpers.setValue(selectedOption.id);
    } else {
      helpers.setValue("");
    }
  };

  return (
    <>
      <Autocomplete
        options={options || []}
        autoHighlight
        autoComplete
        disabled={disabled}
        getOptionLabel={(option) => option?.name || ""}
        value={val}
        onChange={handleChange}
        renderOption={(option, { selected }) => {
          return (
            <span className={`auto-complete-item ${selected ? "selected" : ""}`}>
              {option?.name || ""}
              <span className="icon-selected">
                <IconCheck />
              </span>
            </span>
          );
        }}
        getOptionSelected={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <Mui.TextField
            {...params}
            error={meta.touched && meta.error ? true : false}
            placeholder={""}
            inputProps={{ ...params.inputProps, autoComplete: "nofill" }}
            InputProps={{
              ...params.InputProps,
            }}
            InputLabelProps={shrinkLabel ? { shrink: true } : {}}
            variant={variant ? variant : "outlined"}
            label={label}
          />
        )}
        classes={{ popper: "select-dropdown" }}
      />

      {meta.touched && meta.error ? (
        <Mui.FormHelperText error>
          {meta.touched && meta.error ? meta.error : null}
        </Mui.FormHelperText>
      ) : null}
    </>
  );
};

export default AutocompleteSelectField;
