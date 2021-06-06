import React from 'react'
import NForm from './../../../component/NForm'
import Email from './../../../component/initLogin/Email'
class Reset extends React.Component{
    render(){
        return(
            <NForm title="Reset Password">
                 <Email/>
            </NForm>
        )
    }
}
export default Reset