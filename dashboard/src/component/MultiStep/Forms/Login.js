import React from 'react'
import * as MUI from '@material-ui/core'
import InputField from './../FormField/inputField'
import PasswordField from './../FormField/passwordField'
class Login extends React.Component{
    render(){
      const {formField:{email,password}}=this.props
        return(
            <React.Fragment>
            <MUI.Grid container direction="row" alignItems="center" alignContent="center"> 
            <MUI.Grid item  xs={12}>
                <InputField
                 name={email.name}
                 label={email.label}
                 variant="outlined"
                 fullWidth
                 />
                 <PasswordField
                 name={password.name}
                 label={password.label}
                 />
              
              </MUI.Grid>
          </MUI.Grid>
          
        
            </React.Fragment>
        )
    }
}

export default Login;