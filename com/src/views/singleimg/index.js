import {Formik,Form} from 'formik'
import React from 'react';
import SingleImage from './../../Component/form/single-image'
class Image extends React.Component{
    render(){
        return(
            <Formik initialValues={{file:null}}
            onSubmit={
                values=>{
                  const data=new FormData()
                  data.append('files',values.file)
                   console.log(values.file)
                }
            }
            >
                   
                         {props=>(
                              <Form>
                                <SingleImage name="file"/>
                                <button type="submit">Submit</button>
                             </Form> 
                         )}
                         
                  

                    
                
             
            </Formik>
        )
    }
}
export default Image;