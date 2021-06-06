import React from 'react';
import * as MUI from '@material-ui/core'
const InputText=({label,name,variant,...props})=>{ 

    return(
        <MUI.TextField variant={"outlined" || variant} name={name} label={label} margin="normal" fullWidth {...props}/> 
    )
}
export default InputText;