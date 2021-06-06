import React, { useEffect } from "react";
import * as Mui from "@material-ui/core";
import { useField } from "formik";
import { useTranslation } from "react-i18next";
import { IconChevronDown } from "../svg";
import { extractValue } from "../../helpers/util";

const MultipleSelectField = ({
  label,
  options,
  optionLabel,
  variant,
  callback,
  shrinkLabel = true,
  selectAll = false,
  limitTags,
  ...props
}) => {
  const { t, i18n } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const [val, setVal] = React.useState([]);
  const isAllSelected = options?.length > 0 && val.length === options.length;

  useEffect(() => {
    setVal(field.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setVal(val.length === options.length ? [] : extractValue(options, "id"));
      helpers.setValue(
        val.length === options.length ? [] : extractValue(options, "id")
      );
      if (callback) {
        callback(
          val.length === options.length ? [] : extractValue(options, "id")
        );
      }
      return;
    }
    setVal(value);
    helpers.setValue(value);
    if (callback) {
      callback(value);
    }
  };

  return (
    <Mui.FormControl
      error={meta.touched && meta.error ? true : false}
      variant={variant ? variant : "outlined"}
    >
      <Mui.InputLabel shrink={shrinkLabel} htmlFor="mutiple-select">
        {label}
      </Mui.InputLabel>
      <Mui.Select
        id="mutiple-select"
        value={val}
        multiple
        {...field}
        {...props}
        onChange={handleChange}
        input={<Mui.OutlinedInput />}
        renderValue={(selected) => (
          <>
            {selected?.map((value, index) => (
              <>
                {value !== "all" ? (
                  <span className="chip-wrap" key={index}>
                    {limitTags ? (
                      <>
                        {index < limitTags ? (
                          <Mui.Chip
                            label={
                              typeof options?.find((x) => x.id === value)?.[
                                optionLabel
                              ] === "object"
                                ? options?.find((x) => x.id === value)?.[
                                    optionLabel
                                  ]?.[i18n.language]
                                : options?.find((x) => x.id === value)?.[
                                    optionLabel
                                  ]
                            }
                          />
                        ) : null}
                      </>
                    ) : (
                      <Mui.Chip
                        label={
                          typeof options?.find((x) => x.id === value)?.[
                            optionLabel
                          ] === "object"
                            ? options?.find((x) => x.id === value)?.[
                                optionLabel
                              ]?.[i18n.language]
                            : options?.find((x) => x.id === value)?.[
                                optionLabel
                              ]
                        }
                      />
                    )}
                  </span>
                ) : null}
              </>
            ))}

            {limitTags && selected.length > limitTags ? (
              <Mui.Chip label={`+${selected.length - limitTags}`} />
            ) : null}
          </>
        )}
        IconComponent={IconChevronDown}
        MenuProps={{
          className: "select-dropdown-multiple",
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
        {selectAll ? (
          <Mui.MenuItem value="all">
            <Mui.Checkbox
              checked={isAllSelected}
              color="primary"
              indeterminate={val?.length > 0 && val?.length < options?.length}
              className="mr-1"
            />
            {t("COMMON.SELECT_ALL")}
          </Mui.MenuItem>
        ) : null}

        {options?.map((item, index) => {
          return (
            <Mui.MenuItem key={index} value={item.id}>
              <Mui.Checkbox
                checked={val.indexOf(item.id) > -1}
                color="primary"
                className="mr-1"
              />
              {typeof item?.[optionLabel] === "object"
                ? item?.[optionLabel]?.[i18n.language] || ""
                : item?.[optionLabel]}
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

export default MultipleSelectField;
