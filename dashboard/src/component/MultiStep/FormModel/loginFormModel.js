const loginFormModel= {
    formId:"Login",
    formField:{
        email:{
            name:'email',
            label:"Email",
            requireErrMsg:"Email is required",
            invalidEmail:"Email  is Invalid"
        },
        password:{
            name:"password",
            label:"Password",
            requireErrMsg:"Password is Required"
        
        },
        otp:{
            name:'otp',
            label:"OTP Code",
            requireErrMsg:"Otp is Required"
        }
    }
}
export default loginFormModel;