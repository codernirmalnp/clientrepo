import React from 'react'
import * as MUI from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {at} from 'lodash'
import {useField} from 'formik'
const PasswordText=(props)=>{
    const {errorText,...rest}=props
    const [field,meta]=useField(props)
    function _renderHelperText(){
      const [touched,error]=at(meta,'touched','error')
      if(touched && error) return error;
    }
    const [showPassword,setShowPassword]=React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    const handleMouseDownPassword=(event)=>{
        event.preventDefault()
    }
  
    return(
        <MUI.TextField variant="outlined"
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        {...field}
        margin="normal" fullWidth
        InputProps={{
          endAdornment: (
            <MUI.InputAdornment position='end'>
              <MUI.IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </MUI.IconButton>
            </MUI.InputAdornment>
          ),
        }}
        type={showPassword ? 'text':'password'}
        {...rest}
        />
       
    )
}
export default PasswordText;