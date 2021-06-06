import React from 'react'
import { withTranslation } from "react-i18next";
import {Formik,Form} from 'formik'
import * as Mui  from '@material-ui/core'
import { InputField, InputPasswordField } from "./../form";
import * as  Yup from 'yup'
class InternalEmployee extends React.Component{
    constructor(props){
        super(props)
        this.returnUrl=this.props.location?.state?.returnUrl || null
        this.resonseMessage=this.props.location?.state?.responseMessage || ""
        this.validationSchema=Yup.object().shape({
            email:Yup.string().email(this.props.t("AUTH.VALIDATION.INVALID_EMAIL"))
            .required(this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")),
            password:Yup.string().required(
                this.props.t("AUTH.VALIDATION.REQUIRED_FIELD")
            ),
          
        })
    }
    render(){
        const {t}=this.props
        return(
            <React.Fragment>
             {this.props.error ? (
                  <Mui.Typography
                    className="d-block mt-2 text-center text-color-danger"
                    variant="span"
                    component="body2"
                  >
                    {this.props.error}
                  </Mui.Typography>
                ) : null}

                {/* Success/error message while navigation */}
                {this.responseMsg && !this.props.error ? (
                  <Mui.Typography
                    className="d-block mt-2 text-center text-color-primary"
                    component="span"
                    variant="body2"
                  >
                    {this.responseMsg}
                  </Mui.Typography>
                ) : null}

                <Formik
                   initialValues={{
                       email:'superadmin@gmail.com',
                       password:'',
                       remeber:0,
                       returnUrl:this.returnUrl
                   }}
                   validationSchema={this.validationSchema}
                   onSubmit={this.onLogin}
                >
                    {
                        (props)=>(
                            <Form>
                                 <Mui.Grid container spacing={3} direction="column">
                                 <Mui.Grid item xs={12}  md={4}  className="mb-2">
                                         <InputField
                                         name="email"
                                         type="text"
                                         label={t("AUTH.INPUT.EMAIL")}
                                         placeholder="Enter your Email"
                                         fullWidth={true}
                                         />
                                      </Mui.Grid>
                                      <Mui.Grid item xs={12} md={4}>
                                          <InputPasswordField 
                                           name="password"
                                           label={t("AUTH.INPUT.PASSWORD")}
                                           placeholder="Input your password"
                                           fullWidth={true}
                                           />
                                      </Mui.Grid>
                                     
                                 </Mui.Grid>


                                 <Mui.Grid
                                  container
                                  direction="row"
                                  alignItems="center"
                                  spacing={3}
                                   >
                                    <Mui.Grid item xs={12} sm={6}>
                                         <Mui.FormControlLabel
                                          control={
                                              <Mui.Checkbox
                                                  color="primary"
                                                  checked={props.values.remember === 1}
                                                  onChange={(event) =>
                                                  props.setFieldValue(
                                                 "remember",
                                                  event.target.checked ? 1 : 0
                                                 )
                                                }
                                               />
                                                  }
                                               label={t("AUTH.GENERAL.REMEMBER_ME")}
                                             />
                                       </Mui.Grid>
                       
                      </Mui.Grid>

                      <Mui.Button
                        className="btn-default align-self-start"
                        type="submit"
                        variant="contained"
                        color="primary"
                        disableElevation
                        disabled={this.props.loading}
                      >
                        {t("AUTH.LOGIN.BUTTON")}
                        {this.props.loading && (
                          <Mui.CircularProgress color="secondary" size={24} />
                        )}
                      </Mui.Button>
                            </Form>
                        )
                    }
                </Formik>

            </React.Fragment>
        )
    }
}
export default (
    withTranslation()(Mui.withWidth()(InternalEmployee))
  );