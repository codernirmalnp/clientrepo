import * as Mui from "@material-ui/core";

const StyledChip = Mui.withStyles((theme) => ({
  root: (props) => ({
    height: "auto",
    padding: "5px 10px",
    backgroundColor: props.bgcolor,
    color: Mui.lighten(props.bgcolor, 0.9),
  }),
  label: { padding: 0, lineHeight: 1.3 },
}))(Mui.Chip);

export default StyledChip;
