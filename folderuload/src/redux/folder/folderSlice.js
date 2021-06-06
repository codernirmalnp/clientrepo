import { createSlice } from "@reduxjs/toolkit";
const folderSlice=createSlice({
    name:'folder',
    initialState:{
        parentId:'',
        loading:'',
        status:false,
        message:'',
        folder:[],
        files:[]
    },
    reducers:{
      getFolderFile:()=>{},
      getFolderFilePending:(state)=>{
       state.loading=true
      },
      getFolderFileSuccess:(state,{payload})=>{
         state.loading=false
         state.status=true
         state.folder=payload.folders
         state.files=payload.files
      },
      getFolderFileFail:(state,{payload})=>{
          state.loading=false
          state.status=payload.status
          state.message=payload.err
      },
      createFolder:()=>{},
      createFolderSuccess:(state,{payload})=>{
          state.folder=state.folder.concat(payload)
      },
      createFolderFail:(state,{payload})=>
      {
         state.message=payload
      },

      getFolderFileById:()=>{},
      getFolderFileByIdSuccess:(state,{payload})=>{
        state.loading=false
        state.status=true
        state.folder=payload.folders
        state.files=payload.files
      },
      getFolderFileByIdFail:(state,{payload})=>{
        state.loading=false
        state.status=payload.status
        state.message=payload.err

      },
      setParentFolder:(state,action)=>{
         state.parentId=action.payload
      }
     

      
    },
   
},
)

export const {
    getFolderFile,
    getFolderFileSuccess,
    getFolderFileFail,
    createFolder,
    createFolderSuccess,
    createFolderFail,
    getFolderFileById,
    getFolderFileByIdSuccess,
    getFolderFileByIdFail,
    setParentFolder,
    getFolderFilePending
}=folderSlice.actions
export default folderSlice.reducer