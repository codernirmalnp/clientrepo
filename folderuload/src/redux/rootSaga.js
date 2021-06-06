import {all} from 'redux-saga/effects'
import authSaga from './auth/rootSaga'
import folderSaga from './folder/rootSaga'
export default function* rootSaga(){
    yield all(
        [
            authSaga(),
            folderSaga()
        ]
    )
}