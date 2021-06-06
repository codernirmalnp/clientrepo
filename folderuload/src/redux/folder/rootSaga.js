import {takeLatest,fork,all} from 'redux-saga/effects'
import {getFolderAndFiles,createFolder as makeFolder,getFolderFileById as getFFById} from './actions'
import { getFolderFile,createFolder,getFolderFileById} from './folderSlice'

 function* watcherFilesFolderSaga(){
    yield takeLatest(getFolderFile.type,getFolderAndFiles)
 }
 function* watchCreateFolder(){
    yield takeLatest(createFolder.type,makeFolder)

 }
 function* watchGetFolderById(){
    yield takeLatest(getFolderFileById.type,getFFById)
 }

export  default function* rootSaga(){
   yield all([
       fork(watcherFilesFolderSaga),
       fork(watchCreateFolder),
       fork(watchGetFolderById)
   ])

}