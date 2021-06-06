
import InternalEmployee from './InternalEmployee'
import Norwegian from './Norwegian'
import International from './International'
const TabPanels=(props)=>{
    const renderItem=()=>{
        switch(props.index){
            case 0:
               return  <InternalEmployee/>
                
            case 1:
                return <Norwegian/>
             
            case 2:
               return <International/>
              
            default:
                return    

        }
    }
    return(<div>
        {renderItem()}
    </div>)
    

        }

export default TabPanels;
