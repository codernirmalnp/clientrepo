import React from 'react'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import NForm from '../../../component/NForm'
import {withRouter} from 'react-router'
import  {initLogin,resetAll} from '../../../redux/auth/action'
import Email from '../../../component/initLogin/Email'
class InitLogin extends React.Component{

    render(){
     const {success,message,error}=this.props
      if(error){
         toast.warn(`${error.error.msg}`)
        const timer= setTimeout(()=>this.props.resetAll(),3000)
        clearTimeout(timer)
      }
      if(success)
      {
         toast.success(`${message}`)
         const timer=setTimeout(()=>this.props.resetAll(),3000)
         clearTimeout(timer)
      }
        return(
            <>
              
            <NForm title="Join Us" loading={this.props.loading}>
               <Email  login={this.props.initLogin}   user={this.props.user} loading={this.props.login} error={this.props.error} history={this.props.history}/>
            </NForm>
           
            </>
        )
    }
}
const mapStateToProps=({auth})=>{
  const {user,loading,error,success,message}=auth;
  return {user,loading,error,success,message}

}
export default  withRouter(connect(mapStateToProps,{initLogin,resetAll}) (InitLogin));