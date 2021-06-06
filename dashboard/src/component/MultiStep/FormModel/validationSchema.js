import * as Yup from 'yup'
import LoginFormModel from './loginFormModel'
const {formField:{
    email,
    password,
    otp
}}=LoginFormModel


const validationSchema=[
    Yup.object().shape({
        [email.name]:Yup.string().required(`${email.requireErrMsg}`).email(`${email.invalidEmail}`),
        [password.name]:Yup.string().required(`${password.requireErrMsg}`),
      
    }),
    Yup.object().shape({
        [otp.name]:Yup.string().required(`${otp.requireErrMsg}`)
    })

]

export default validationSchema;