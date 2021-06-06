import {takeLatest,fork,all} from 'redux-saga/effects'
import {handleLoginUser} from './actions'
import {loginUser} from './authSlice'

 function* watcherLoginSaga(){
    yield takeLatest(loginUser.type,handleLoginUser)
}

export  default function* rootSaga(){
   yield all([
       fork(watcherLoginSaga)
   ])

}