const setTimer=(method,ms)=>{
    return new Promise.resolve(setTimeout(()=>method,ms))
}
const clearTimer=(timer)=>{
    return new Promise.resolve(clearTimeout(timer))
}