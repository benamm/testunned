import React, { Component } from 'react';

import { Formik } from "formik";
import * as Yup from "yup";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import NormalSignupFormComponent from './TabContentComponent/NormalSignupFormComponent';
import './signup.scss';

class SignupComponent extends Component {
    render() {
        const sadasd = { phoneNumber: "" };

        Yup.addMethod(Yup.string, "phone", function () {
            return this.test("phone", "شمازه وارد شده صحیح نیست !", value =>
                /^(\+98|0)?9\d{9}$/.test(value)
            );
        });

        const validationSchema = Yup.object({
            phone: Yup.string().required('شماره همراه خود را وارد کنید').phone(),
        });

        return (
            <div className="uneed-signup">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <span className="icon-profile-edit"></span>
                                <h5 className="card-title text-center">عضویت</h5>
                                <Tabs>
                                    <TabList>
                                        <Tab>کاربر عادی</Tab>
                                        <Tab>کسب و کار</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <Formik
                                            render={props => <NormalSignupFormComponent {...props} />}
                                            initialValues={sadasd}
                                            validationSchema={validationSchema}
                                        />
                                    </TabPanel>
                                    <TabPanel>
                                        on progress
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupComponent;