import {Formik,Form} from 'formik'
import React from 'react';
import MultipleImage from './../../Component/form/multiple-image'
class Image extends React.Component{
    render(){
        return(
            <Formik initialValues={{multiple:[]}}
            onSubmit={
                values=>{
                console.log(values)
                }
            }
            >
                   
                         {props=>(
                              <Form>
                                <MultipleImage name="multiple"/>
                                <button type="submit">Submit</button>
                             </Form> 
                         )}
                         
                  

                    
                
             
            </Formik>
        )
    }
}
export default Image;