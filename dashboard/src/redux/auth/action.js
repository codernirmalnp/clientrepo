import * as types from './types'
export const initLogin=(data,history)=>({
    type:types.INIT_LOGIN,
    payload:{data,history}
})
export const initLoginSuccess=(success,message)=>({
    type:types.INIT_LOGIN_SUCCESS,
    payload:{success,message}

})
export const  initLoginFail=(error)=>({
    type:types.INIT_LOGIN_FAIL,
    payload:{error}
})
export const resetAll=()=>({
    type:types.CLEAR_ALL,
    payload:{}
})

//verify user init
 export const verifyUser=(userId,secret,history)=>({
     type:types.VERIFY_USER,
     payload:{userId,secret,history}
 })
 export const verifyUserSuccess=(success,message)=>({
     type:types.VERIFY_USER_SUCCESS,
     payload:{success,message}
 })
 export const verifyUserFail=(error)=>{
    return {type:types.VERIFY_USER_FAIL,
    payload:{error}}
}
//verify user end