import {all,fork,call,put,takeEvery} from 'redux-saga/effects'
import * as AuthService from './../../service/auth-service'
import {INIT_LOGIN,VERIFY_USER} from './types'
import {initLoginSuccess,initLoginFail,verifyUserSuccess,verifyUserFail} from './action'

//init login saga start
const initLoginAsync=(payload)=>(
    AuthService.startLogin(payload)
)

function* initLogin({payload}){
try{
    const response=yield call(initLoginAsync,payload)
    yield put(initLoginSuccess(response.status,response.msg.msg))
  

}
catch(error){
    yield put(initLoginFail(error.response.data.msg));
    if(!error.response.data.msg.new) return setTimeout(()=>payload.history.push('/login'),3000)
}

}   

 function* watchinitLogin(){
yield takeEvery(INIT_LOGIN,initLogin)
}
//init login saga end


//verify user saga init
const verifyUserAsync=async (payload)=>{
    AuthService.verifyUser(payload)
}
function* verifyUser({payload}){

    try{
        const response=yield call(verifyUserAsync,payload)
        yield put(verifyUserSuccess(response.status,response.msg))


    }
    catch(error){
        yield put(verifyUserFail(error))
        
    }

}
function * watchverifyUser(){
    yield takeEvery(VERIFY_USER,verifyUser)
}
//verify user end

export default function* rootSage(){
    yield all(
        [
            fork(watchinitLogin),
            fork(watchverifyUser)
        ]
    )
}