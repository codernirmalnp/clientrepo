import * as Mui from "@material-ui/core";

const StyledSwitch = Mui.withStyles((theme) => ({
  root: {
    width: 35,
    height: 21,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    transform: "translateX(2px)",
    "&$checked": {
      transform: "translateX(14px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: "0 3px 4px rgba(0,0,0,0.33)",
    background: "#fff",
  },
  track: {
    border: "none",
    borderRadius: 50,
    opacity: 1,
    backgroundColor: "#C4C4C4",
  },
  checked: {},
}))(Mui.Switch);

export default StyledSwitch;
