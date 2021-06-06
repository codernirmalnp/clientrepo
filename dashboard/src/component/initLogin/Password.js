import React from 'react'
import * as MUI from '@material-ui/core'
import Controls from '../Controls'
class Password extends React.Component{
    render(){
        return(
       <MUI.Grid container direction="column">
        <MUI.Grid container direction="row" alignItems="center" alignContent="center"> 
           <MUI.Grid item  xs={12}>
             <Controls.PasswordText
               name="password"
               label="Enter Password"
               />
          </MUI.Grid>
        </MUI.Grid>
          <MUI.Grid container direction="row" alignItems="center" alignContent="center"> 
          <MUI.Grid item  xs={12}>
            <Controls.PasswordText
              name="cpassword"
              label="Confirm Password"
              />
         </MUI.Grid>
       </MUI.Grid>
       </MUI.Grid> 
       
        
        )
    }
}
export default Password;