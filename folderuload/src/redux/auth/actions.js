import { call, put } from "redux-saga/effects";
import { requestLoginUser } from "./service";
import {loginSuccess,loginFail}  from './authSlice'

export function* handleLoginUser(action) {
  const {payload}=action
  try {
    const response = yield call(requestLoginUser,payload);
    const { data } = response;
    if(response.status===200)
    {
      yield put(loginSuccess(data));

    }
    
   
    
  } catch (error) {
    yield put(loginFail(error.response.data))
  }
}
