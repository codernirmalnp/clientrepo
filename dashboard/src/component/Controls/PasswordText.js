import React from 'react'
import * as MUI from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const PasswordText=({variant,label,name,...props})=>{
    const [showPassword,setShowPassword]=React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    const handleMouseDownPassword=(event)=>{
        event.preventDefault()
    }
  
    return(
        <MUI.TextField variant={"outlined" || variant} label={label} name={name}
        
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
        />
       
    )
}
export default PasswordText;