import React from 'react'
import NForm from './../../../component/NForm'
import NewPassword from './../../../component/initLogin/Password'
class Password extends React.Component{
    render(){
        return(
            <NForm title="Add Password">
              <NewPassword/>
            </NForm>
        )
    }
}
export default Password;