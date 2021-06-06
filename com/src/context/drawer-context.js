import {createContext,useState,useContext} from 'react'
const DrawerContext=createContext(undefined)
const DrawerContextProvider=({children})=>{
    const [isOpened,setToogle]=useState(false)
    return(
        <DrawerContext.Provider value={{isOpened,setToogle}}>
            {children}
        </DrawerContext.Provider>
    )
}
const useDrawerContext=()=>{
    const context=useContext(DrawerContext)
  
    if(context===undefined){
        console.log("I am running")
        throw new Error(
             "useDrawerContext must be used within a DrawerContextProvider"
        )
    }
    return context;
}
export {DrawerContextProvider,useDrawerContext}