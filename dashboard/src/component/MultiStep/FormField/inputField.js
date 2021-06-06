import React from 'react'
import * as MUI from '@material-ui/core'
import {at} from 'lodash'
import {useField} from 'formik'
const InputField=(props)=>{
    const {errorText,...rest}=props
    const [field,meta]=useField(props)
    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
          return error;
        }
      }
    
    return(
        <MUI.TextField 
        type="text"
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        {...field}
        {...rest}
         />
       
    )
}

export default InputField;