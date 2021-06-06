import React from 'react'
import * as Mui from '@material-ui/core'
import { withTranslation } from "react-i18next";
import * as Yup from 'yup'
class Norwegian extends React.Component{
    constructor(props){
        super(props)
        this.returnUrl=this.props.location?.state?.returnUrl || null;
        this.responseMessage=this.props.location?.state?.responseMessage || ""
        this.validationSchema=Yup.object().shape({
            
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
            </React.Fragment>
        )
    }

}
export default (
    withTranslation()(Mui.withWidth()( Norwegian ))
  );