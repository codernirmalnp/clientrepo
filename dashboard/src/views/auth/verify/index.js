import {React,Component} from 'react'
import {connect} from 'react-redux'
import {verifyUser} from './../../../redux/auth/action'
class Verify extends Component{
    constructor(props){
        super(props)
        this.props.verifyUser(this.props.match.params.userId,this.props.match.params.secret,this.props.history)
       
    }
    render(){
        return <>Verifying...</>
    }

}
const mapStateToProps=({auth})=>{
    const {success,message,loading,error}=auth
    return {success,message,loading,error}
}
export default connect(mapStateToProps,{verifyUser})(Verify);