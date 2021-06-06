import {createContext,useState,useContext} from 'react'
const DrawerContext=createContext(undefined)
const DrawerContextProvider=({children})=>{
    const [isOpend,toogleIsOpend]=useState(false)
    return(
        <DrawerContext.Provider value={{isOpend,toogleIsOpend}}>
            {children}
        </DrawerContext.Provider>
    )
}
const useDrawerContext=()=>{
    const context=useContext(DrawerContext)
    if(context===undefined){
        throw new Error(
             "useDrawerContext must be used within a DrawerContextProvider"
        )
    }
    return context;
}
export {DrawerContextProvider,useDrawerContext}