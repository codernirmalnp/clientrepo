import axios from 'axios'
export const startLogin=(payload)=>{
    const API_URL='/api/v1/auth/initsignin'
    return axios.post(API_URL,payload.data).then((res)=>res.data)
}
export const verifyUser=(payload)=>{
    const API_URL=`/api/v1/auth/verify-account/${payload.userId}/${payload.secret}`
    return axios.post(API_URL).then((response)=>response.data).catch(err=>err)
}