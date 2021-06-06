import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import * as MUI from '@material-ui/core'
class Profile extends React.Component{

render(){
    const {classes}=this.props
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
           <Grid container direction="row"  spacing={2} justify="center">
               <Grid item md={4} sm={12}>
                   <Paper elevation={6} className={classes.pro}>
                     <Grid container direction="column"  alignItems="center"> 
                          <Grid item >
                              <MUI.Avatar className={classes.image} src="https://i.ibb.co/MZLpF86/chris-barbalis-n2-M2-SBQE6-Iw-unsplash.jpg"/>
                          </Grid>
                          <Grid item>
                              <MUI.Typography style={{fontWeight:'bold'}} variant="h5">Nirmal Dangi</MUI.Typography>
                          </Grid>
                          <Grid item>
                              <MUI.Typography color="textSecondary" style={{fontWeight:'bold'}}>
                                  React Frontend Developer
                              </MUI.Typography>
                          </Grid>
                          <Grid item style={{marginTop:'1rem'}}>
                          <MUI.Button variant="contained" color="secondary"  fullWidth >
                                 Message
                           </MUI.Button>
                          </Grid>
                     </Grid>
                     </Paper>
               </Grid>


               <Grid item md={8} sm={12}>
                   <Paper elevation={2} className={classes.setting}>
                      <MUI.Typography style={{fontWeight:'bold'}}>Profile</MUI.Typography> 
                         <MUI.Divider />
                     <Grid container direction="row" justify="center" spacing={1}>
  
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="Name">
                                 
                               </MUI.TextField>
                         </Grid>
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="Email">

                               </MUI.TextField>
                         </Grid>
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="Phone Number">

                               </MUI.TextField>
                         </Grid>
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="Country">

                               </MUI.TextField>
                         </Grid>
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="State">

                               </MUI.TextField>
                         </Grid>
                         <Grid item sm={6} >
                               <MUI.TextField variant="outlined" margin="normal" fullWidth label="State">

                               </MUI.TextField>
                         </Grid>
                        
                  
                     </Grid>
                     <MUI.Button variant="contained" color="primary" fullWidth>
                           Submit
                     </MUI.Button>
                   </Paper>
                   
               </Grid>
           </Grid>
      </Paper>
    </div>
  );
}
}

const style=theme=> ({
    root: {
      display:'flex',
      flexGrow: 1,
     
    },
    paper: {
      padding: theme.spacing(4),
      width:'100%', 
    },
    image: {
      width: 150,
      height: 150,
    },
   pro:{
       padding:theme.spacing(2)
   },
    setting:{
    
        padding:theme.spacing(2)
    }
   
  }); 
export default withStyles(style)(Profile);
