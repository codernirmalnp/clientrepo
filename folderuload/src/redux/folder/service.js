import axiosApiInstance from './../../interceptors'
export const getFileFolder=async ()=>await axiosApiInstance.get('/folder')
export const makeFolder=async (payload)=> {
    console.log(payload)
   return payload.parentId ?   await axiosApiInstance.post(`/folder`,payload)
    :await axiosApiInstance.post(`/folder`,{name:payload.name})

} 
export const getFileFolderById=async (payload)=>await axiosApiInstance.get(`/folder/${payload}`)


