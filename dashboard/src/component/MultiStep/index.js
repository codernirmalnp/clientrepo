import React from 'react'
import * as MUI from '@material-ui/core'
import {Formik,Form} from 'formik'
import {withStyles} from '@material-ui/core'
import FormInitalValues from './FormModel/formInitialValues'
import validationSchema from './FormModel/validationSchema'
import loginFormModel from './FormModel/loginFormModel'
import NForm from './../NForm'

const LoginForm=React.lazy(()=>import('./Forms/Login'))
const VerifyForm=React.lazy(()=>import('./Forms/Verification'))
const Success=React.lazy(()=>import('./Forms/Success'))
const {formId,formField}=loginFormModel

      
const steps=["Login","Verification"]
class MultiStepForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      activestep:0,
    
    
    }
 
  }

    _sleep(ms){
        return new Promise(resolve=>setTimeout(resolve,ms))
    }
     _submitForm=async (values,actions)=>{
     
         await this._sleep(1000)
         alert(JSON.stringify(values,null,true))
         actions.setSubmitting(false)
         this.setState({activestep:this.state.activestep+1})

    }
    _handelSubmit=(values,actions)=>{
        if((this.state.activestep===steps.length-1)){
      
            this._submitForm(values,actions)
        }else{
          
          this.setState({activestep:this.state.activestep+1})
          actions.setTouched({})
          actions.setSubmitting(false)
        }
    }
    _handelBack=()=>{
        this.setState({activestep:this.state.activestep-1})
    }
    _renderSteps(step){
      switch(step){
          case 0:
              return <LoginForm formField={formField}/>
          case 1:
              return <VerifyForm formField={formField}/>
          default:
              return 
      }
    }

    render(){
        const isLastStep=this.state.activestep===steps.length-1
        const {classes}=this.props
        const {activestep,isSubmitting}=this.state
        const currentValidationSchema=validationSchema[activestep]
      
        return(
        <NForm>

          {activestep === steps.length ? <Success/>:
          (<React.Fragment>
            <MUI.Stepper activeStep={activestep}>
                 {steps.map(label => (
                  <MUI.Step key={label}>
                     <MUI.StepLabel>{label}</MUI.StepLabel>
                 </MUI.Step>
                   ))}
                </MUI.Stepper>
                <React.Fragment>
                <Formik
                 initialValues={FormInitalValues}
                  validationSchema={currentValidationSchema}
                 onSubmit={this._handelSubmit}
                 >

                <Form id={formId}>
                          {this._renderSteps(activestep)}
                   <div  className={classes.button}>
                  {activestep !== 0 && (
                    <MUI.Button onClick={this._handelBack} variant="contained" color="secondary" > 
                      Back
                    </MUI.Button>
                  )}
                  <div >
                    <MUI.Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {isLastStep ? 'SUBMIT' : 'Next'}
                    </MUI.Button>
                    {isSubmitting && (
                      <MUI.CircularProgress
                        size={24}
                       
                      />
                    )}
                  </div>
                </div>
                     </Form>
                
                </Formik>

            </React.Fragment>
            </React.Fragment>)}
            
        </NForm>)
        
         }

}
const style=theme=>({
button:{

  marginTop:'2rem',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between'
}

})
export default withStyles(style)(MultiStepForm);