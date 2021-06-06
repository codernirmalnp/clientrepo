
import { makeStyles } from "@material-ui/core/styles";

import Drawer from './Drawer'
import { DrawerContextProvider } from "../context/drawer-context"
import { Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection:'column',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
 
  },
wraper:{
  display: 'flex',
    flex: '1',
    overflow: 'hidden',


},
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  main: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
}));


const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <DrawerContextProvider>
      <div className={classes.root}>
       
      <Toolbar/>
      
        <Drawer/>
        <div className={classes.container}>
          <main className={classes.main}>
            {children}
          </main>
        </div>
        </div>
    
    </DrawerContextProvider>
  );
};

export default Layout;