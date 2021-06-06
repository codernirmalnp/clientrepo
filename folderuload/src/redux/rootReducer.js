import {combineReducers} from '@reduxjs/toolkit'
import userReducer from './auth/authSlice'
import folderReducer from './folder/folderSlice'
const rootReducer=combineReducers({user:userReducer,folder:folderReducer})
export default rootReducer;