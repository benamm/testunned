import React, { Component } from 'react';
import { connect } from 'trim-redux';

import { Formik } from "formik";
import * as Yup from "yup";

import LoginFormComponent from './LoginFromComponent/LoginFormComponent';
import VerificationLoginComponent from './VerificationLoginComponent/VerificationLoginComponent';
import './login.scss';

Yup.addMethod(Yup.string, "phone", function () {
    return this.test("phone", "شمازه وارد شده صحیح نیست !", value =>
        /^(\+98|0)?9\d{9}$/.test(value)
    );
});

Yup.addMethod(Yup.string, "code", function () {
    return this.test("code", "کد دریافتی فقط اعداد میتواند باشد !", value =>
        /^[0-9]*$/.test(value)
    );
});

const validationSchemaNumber = Yup.object({
    phone: Yup.string().required('شماره همراه خود را وارد کنید').phone(),
});

// const validationSchemaVerifyComponent = Yup.object({
//     code: Yup.string().required('کد دریافتی را وارد کنید').code()
// });

class LoginComponent extends Component {
    render() {
        const phone = { phone: "" };
        const verifyphone = { verifyphone: "" };
        return (
            <div className="uneed-login">
                <div className="d-flex align-items-center justify-content-center uneed-login-content">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <span className="icon-profile-edit"></span>
                                <h5 className="card-title text-center">ورود به حساب کاربری</h5>
                                {!this.props.renderFormNock ?
                                    <Formik
                                        render={props => <LoginFormComponent {...props} />}
                                        initialValues={phone}
                                        validationSchema={validationSchemaNumber}
                                    />
                                    :
                                    <Formik
                                        render={props => <VerificationLoginComponent {...props} />}
                                        initialValues={verifyphone}
                                        // validationSchema={validationSchemaVerifyComponent}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = state => ({ token: state.token, renderFormNock: state.renderFormNock });

export default connect(mstp)(LoginComponent);