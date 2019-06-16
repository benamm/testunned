import React from 'react';
import axios from 'axios';
import { connect } from 'trim-redux';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { apiUrl } from '../../../Helper/constants'

const NormalSignupFormComponent = props => {
    const {
        values: { phoneNumber, fname, lname },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const phoneNumberChange = (phone, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(phone, true, false);
    };

    const fnameChange = (code, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(code, true, false);
    };
    const lnameChange = (code, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(code, true, false);
    };

        return (
            <form
            onSubmit={(e) => {
                e.preventDefault()

                let phoneNumber123 = phoneNumber;
                if (phoneNumber123.startsWith('0')) {
                    phoneNumber123 = phoneNumber123.replace(/^0+/, '')
                }

                axios({
                    method: 'POST',
                    url: apiUrl + 'user/auth/knock',
                    data: { mb: '98' + phoneNumber123, lg: false, nf: fname, nl: lname },
                    headers: { 't': props.token, 'Content-Type':  'application/json'}
                }).then((res) => {
                    console.log('adadasdsad');
                }).catch(error => console.log(error))
    
            }} >
    
            <TextField
                label="نام"
                margin="normal"
                id="fname"
                name="fname"
                helperText={touched.fname ? errors.fname : ""}
                error={touched.fname && Boolean(errors.fname)}
                value={fname}
                onChange={fnameChange.bind(null, "fname")}
            />
            <TextField
                label="نام خانوادگی"
                margin="normal"
                id="lname"
                name="lname"
                helperText={touched.lname ? errors.lname : ""}
                error={touched.lname && Boolean(errors.lname)}
                value={lname}
                onChange={lnameChange.bind(null, "lname")}
            />
            <TextField
                label="شماره تلفن"
                margin="normal"
                id="phoneNumber"
                name="phoneNumber"
                helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                value={phoneNumber}
                onChange={phoneNumberChange.bind(null, "phoneNumber")}
            />
            <Button
                classes={{ root: "btn btn-login" }}
                type="submit"
                fullWidth
                >عضویت</Button>
            </form>
            )
};

const mstp = state => ({ token: state.token});

export default connect(mstp)(NormalSignupFormComponent);