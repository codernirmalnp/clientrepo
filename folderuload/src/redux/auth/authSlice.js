import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'auth',
    initialState:{
        loading:'',
        status:false,
        message:'',
        user:{}
    },
    reducers:{
      loginUser:()=>{},
      loginPending:(state)=>state.loading=true,
      loginSuccess:(state,{payload})=>{
          state.loading=false
          state.status=payload.status
          state.message=payload.msg
          state.user=payload.data
      },
      loginFail:(state,{payload})=>{
          state.loading=false
          state.status=payload.status
          state.message=payload.err
      }
      
    }
})

export const {loginPending,loginUser,loginSuccess,loginFail}=userSlice.actions
export default userSlice.reducer