import React from 'react'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
class Header extends React.Component{
    render(){
        const {classes}=this.props;
        return(
            <MUI.Grid container direction="row" alignItems="center" justify="space-around" className={classes.root}>
            <MUI.Grid item sm={12} >
                <MUI.Typography variant="h4">
                    Profile
                </MUI.Typography>
                
            </MUI.Grid>
            <MUI.Grid item sm={12} >
            <MUI.Avatar alt="Remy Sharp" className={classes.avatar} src="https://i.ibb.co/MZLpF86/chris-barbalis-n2-M2-SBQE6-Iw-unsplash.jpg" />
            <MUI.Typography variant="h5" style={{textAlign:'center',fontWeight:'bold'}}>Nirmal Dangi</MUI.Typography>
            </MUI.Grid>
            <MUI.Grid item sm={12}>
                 <MUI.Button variant="contained" color="primary">
                     Message
                 </MUI.Button>
            </MUI.Grid>
            </MUI.Grid>
        )
    }
}
const style=theme=>({
  root:{
     marginTop:theme.spacing(10),

  },
  avatar:{
     minWidth:200,
     minHeight:200
  }
})
export default withStyles(style)(Header);

