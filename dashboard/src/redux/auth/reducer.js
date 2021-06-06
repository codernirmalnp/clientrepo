import {INIT_LOGIN,INIT_LOGIN_SUCCESS,INIT_LOGIN_FAIL,CLEAR_ALL, VERIFY_USER, VERIFY_USER_SUCCESS,VERIFY_USER_FAIL} from './types'
const INIT_STATE={
    error:'',
    message:'',
    success:'',
    loading:'',
    user:''
}

const authReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case INIT_LOGIN:
            return {...state,loading:true,error:null}

        case INIT_LOGIN_SUCCESS:
                return {...state,loading:false,success:action.payload.success,message:action.payload.message,error:null}

        case INIT_LOGIN_FAIL:
            return {...state,loading:false,success:false,message:null,error:action.payload}

        case CLEAR_ALL:
            return {...INIT_STATE}

        case VERIFY_USER:
             return {...state,loading:true,error:null}
        
        case VERIFY_USER_SUCCESS:
             return {...state,loading:false,success:action.payload.success,message:action.payload.message}

        case VERIFY_USER_FAIL:
             return {...state,loading:false,error:action.payload,message:null,success:false}
        
        
        default:
            return state;
    }
}
export default authReducer;