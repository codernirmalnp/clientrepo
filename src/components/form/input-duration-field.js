import React, { useState, useEffect } from "react";
import { useField } from "formik";
import * as Mui from "@material-ui/core";
import Datetime from "react-datetime";
import moment from "moment";
import { IconChevronDown } from "../svg";

const InputDurationField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [selectedVal, setSelectedVal] = useState(null);

  useEffect(() => {
    setSelectedVal(field.value ? moment(field.value, "HH:mm") : null);
  }, [field.value]);

  const handleChange = (val) => {
    setSelectedVal(val);
    helpers.setValue(moment(val).format("HH:mm"));
  };

  const renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <>
        <input {...props} />
        <Mui.IconButton onClick={openCalendar} size="small">
          <IconChevronDown />
        </Mui.IconButton>
      </>
    );
  };

  const renderView = (mode, renderDefault) => {
    return <>{renderDefault()}</>;
  };

  return (
    <>
      <label
        className="transform-translate-neutral"
        style={{ marginBottom: 7 }}
      >
        {label ? label : null}
      </label>
      <Mui.Box className="duration-picker">
        <Datetime
          dateFormat={false}
          value={selectedVal || "-"}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
          timeConstraints={{ minutes: { step: 15 } }}
          renderView={(mode, renderDefault) => renderView(mode, renderDefault)}
          renderInput={renderInput}
        />
      </Mui.Box>
      {meta.touched && meta.error ? (
        <Mui.Typography
          component="p"
          variant="body2"
          className="text-color-danger"
        >
          {meta.touched && meta.error ? meta.error : null}
        </Mui.Typography>
      ) : null}
    </>
  );
};

export default InputDurationField;
