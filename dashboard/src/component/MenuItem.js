import * as MUI from '@material-ui/core'
import {createStyles,makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
      "&$selected": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
      },
    },
    selected: {},
    listIcon: {
      minWidth: "auto",
      paddingRight: theme.spacing(2),
    },
    icon: {
      color: theme.palette.secondary.main,
    },
  })
);
const MenuItem=({route,literal,Icon,selected,onClick})=>{
  console.log(Icon)
    const classes=useStyles();
    const link = (
      <MUI.ListItem
        button
        selected={selected}
        classes={{
          selected: classes.selected,
          button: classes.button,
        }}
        onClick={onClick}
      >
        <MUI.ListItemIcon className={classes.listIcon}>
         <Icon className={classes.icon}/>
        </MUI.ListItemIcon>
        <MUI.ListItemText primary={literal} />
      </MUI.ListItem>
    );
    return route ? (<Link to={route}>{link}</Link> ): link;

}
export default MenuItem;