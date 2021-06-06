import Drawer from "@material-ui/core/Drawer";
import MenuItemsList from "./MenuItemList";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDrawerContext } from "../context/drawer-context";

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: "#D8DCD6",
    position: "static",
  },
  closed: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    overflowX: "hidden",
  },
  opened: {
    width: "240px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const  MUIDrawer = () => {
  const classes = useStyles();
  const { isOpened, setToogle } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Drawer
      variant={isLargeScreen ? "permanent" : "temporary"}
      open={!isLargeScreen && isOpened ? true : false}
      onClose={() => setToogle(!isOpened)}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.closed]: !isOpened,
          [classes.opened]: isOpened,
        }),
      }}
    >
      <MenuItemsList />
    </Drawer>
  );
};

export default MUIDrawer;