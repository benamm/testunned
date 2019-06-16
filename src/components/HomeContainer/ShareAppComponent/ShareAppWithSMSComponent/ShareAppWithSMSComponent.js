import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const validate = value => {
    let errorMessage;
    if (!value) {
        errorMessage = 'برای ارسال لینک وارد کردن شماره همراه الزامی میباشد ';
    }
    else if (!/^(\+98|0)?9\d{9}$/i.test(value)) {
        errorMessage = 'شماره وارد شده نامعتبر است ! ';
    }
    return errorMessage;
};

const AppDownloadBoxComponent = () => {
    return (
        <div className="row m-0 download-sms">
            <div className="d-flex align-items-end">
                <div className="col-md-12 parent-enter-number">
                    <div className="txt-head-enter-number">
                        <p> دریافت اپلیکیشن موبایل</p>
                    </div>
                    <div className="txt-enter-number">
                        <p>برای دریافت پیامک لینک دانلود، شماره موبایل خود را ارسال کنید.</p>                            </div>
                    <div className="form-enter-number">
                        <div className="row justify-content-md-center">
                            <Formik
                                initialValues={{ phoneNumber: '', username: '' }}
                                onSubmit= {
                                    values => {
                                        if(values.phoneNumber.startsWith('0')) {
                                            values.phoneNumber = values.phoneNumber.replace(/^0+/, '')
                                        }
                                        axios({
                                            method: 'POST',
                                            url: 'http://tpi.uneed.ir:7100/landing/invite',
                                            data: { mb: '98' + values.phoneNumber }
                                        }).then((res) => {
                                        }).catch(error => console.log(error))
                                        // console.log(JSON.stringify(values, null, 2))
                                    }
                                }
                            >
                                {({ errors, touched }) => (
                                    <div>
                                        <Form className="form-row">
                                        <Field validate={validate} name="phoneNumber" type="text" className="form-control input-form-enter-number" ></Field>
                                        <button type="submit" className="btn btn-outline-secondary input-form-enter-btn">ارسال لینک</button>
                                        
                                    </Form>
                                        <div>
                                            {errors.phoneNumber && touched.phoneNumber ? <div className="row error-message">{errors.phoneNumber}</div> : null}
                                        </div>
                                    </div>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppDownloadBoxComponent;
