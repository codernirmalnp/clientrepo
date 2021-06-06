import loginFormModel from './loginFormModel'
const {
    formField:{
        email,
        password,
        otp

    }
}=loginFormModel


const formInitialValues= {
    [email.name]:'',
    [password.name]:'',
    [otp.name]:''
}

export default formInitialValues;