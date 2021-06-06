import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.light,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6">Footer</Typography>
    </div>
  );
};

export default Footer;