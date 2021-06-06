import React from 'react'
import InputField from './../FormField/inputField'
class Verification extends React.Component{
    render(){
        const {formField:{otp}}=this.props
        return(
            <InputField 
            name={otp.name}
            label={otp.label}
            variant="outlined"
            fullWidth
            />
        )
    }
}
export default Verification;