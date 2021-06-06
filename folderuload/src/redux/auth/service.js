import axiosApiInstance from './../../interceptors'
export const requestLoginUser=async (payload)=>await axiosApiInstance.post('/auth/signin',payload)