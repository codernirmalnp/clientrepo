import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { IconCalendar } from "../svg";

class Datepicker extends Component {
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className="date-time-picker"
          autoOk
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          margin="normal"
          minDate={
            this.props.minDate
              ? new Date(this.props.minDate)
              : new Date("1900-01-01")
          }
          // label={this.props.label || null}
          placeholder={this.props.label || null}
          value={this.props.value || null}
          onChange={this.props.onDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          keyboardIcon={<IconCalendar />}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default Datepicker;
