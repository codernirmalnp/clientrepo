import { call, put } from "redux-saga/effects";
import {getFileFolder,makeFolder,getFileFolderById } from "./service";
import {getFolderFileSuccess,getFolderFileFail,getFolderFileByIdSuccess,getFolderFileByIdFail,createFolderSuccess,createFolderFail}  from './folderSlice'

export function* getFolderAndFiles() {

  try {
    const response = yield call(getFileFolder);
    const { data } = response;
    if(response.status===200)
    {
      yield put(getFolderFileSuccess(data));

    }
    
   
    
  } catch (error) {
    yield put(getFolderFileFail(error.response.data))
  }
}

export function* createFolder(action){
  try{
    const response=yield call(makeFolder,action.payload)
    const {data}=response

     
    if(response.status===200){
        yield put(createFolderSuccess(data))
    }


  }
  catch(error){
    yield put(createFolderFail(error.response.data))

  }
}

export function* getFolderFileById(action){

  try{
    const response=yield call(getFileFolderById,action.payload)
    const {data}=response
    if(response.status===200){
        yield put(getFolderFileByIdSuccess(data))
    }
  
  }
  catch(error){
    yield put(getFolderFileByIdFail(error.response.data))

  }

}

