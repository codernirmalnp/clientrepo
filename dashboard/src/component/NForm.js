import React from 'react'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {withRouter} from 'react-router'


class NForm extends React.Component{
     render(){
       const {title,classes,children}=this.props
  
      
        return(
          <div  className={classes.root}>
           
            <MUI.Paper elevation={1} className={classes.paper}>
                <MUI.Typography variant="h4" color="primary" >
                      {title}
                </MUI.Typography>
              
                {children}
              
          </MUI.Paper>
         
       </div>
        )
    }
}
const style=theme=>({
  root:{
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background:'#F0F8FF'

   


  },
  paper:{
    maxWidth:300,
    padding:theme.spacing(3),
    width:'100%'
  }
})
export default withRouter(withStyles(style)(NForm));