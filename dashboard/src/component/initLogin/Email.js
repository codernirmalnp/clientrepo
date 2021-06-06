import React from 'react'
import * as MUI from '@material-ui/core'
import {Formik} from 'formik'
import * as Yup from 'yup'
class Email extends React.Component{

   
render(){
        
    return(
    <Formik initialValues={{ email: ''}} 
         onSubmit={(values,{setSubmitting})=>{ 
         values.type="email"
         setSubmitting(true)
         this.props.login(values,this.props.history)
         setSubmitting(false)
         }}
         validationSchema={
                      Yup.object().shape({
                      email:Yup.string().email("Invalid Email").required("Email is Required")
               })
            }>
        {props=>{
            const {values,touched,errors,dirty,
            isSubmitting,handleChange,handleBlur,handleSubmit,handleReset}=props
            return(
        <form onSubmit={handleSubmit} style={{marginTop:'1rem'}}>
                   <MUI.Grid container direction="row" alignItems="center" alignContent="center"> 
                      <MUI.Grid item  xs={12}>
                          <MUI.TextField
                           name="email"
                           label="Enter Your Email"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           helperText={(errors.email && touched.email) && <span style={{color:'red',fontSize:'0.8rem'}}>{errors.email}</span>}
                           variant="outlined"
                           fullWidth
                           />
                        </MUI.Grid>
                    </MUI.Grid>
                    <MUI.Grid container direction="column" spacing={1} style={{marginTop:'1rem'}}>
                        <MUI.Grid item>
                             <MUI.Button type="button"  variant="contained" color="secondary"  onClick={handleReset} disabled={!dirty || isSubmitting}  fullWidth>  Reset</MUI.Button>
                        </MUI.Grid>

                        <MUI.Grid item>
                          <MUI.Button type="submit" disabled={isSubmitting} variant="contained"  color="primary" fullWidth>
                                   {isSubmitting ? (<MUI.CircularProgress fontSize={24}/>):'Submit'}    
                         </MUI.Button>
                      </MUI.Grid>
  
                      </MUI.Grid>
                </form>
            )
        }}
  
    </Formik>
         
        )
    }

}
export default Email;