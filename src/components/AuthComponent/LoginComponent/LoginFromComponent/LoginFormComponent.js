import React from 'react';
import axios from 'axios';
import { connect, setStore, getStore } from 'trim-redux';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { apiUrl } from '../../../Helper/constants'

const LoginFormComponent = props => {
    const {
        values: { phone },
        errors,
        touched,
        onSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (phone, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(phone, true, false);
    };

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                let phoneNumber = phone;
                if (phoneNumber.startsWith('0')) {
                    phoneNumber = phoneNumber.replace(/^0+/, '')
                }
                axios({
                    method: 'POST',
                    url: apiUrl + 'user/auth/knock',
                    data: { mb: '98' + phoneNumber, lg: true },
                    headers: { 't': props.token, 'Content-Type':  'application/json'}
                }).then((res) => {
                    setStore({
                        renderFormNock: true
                    })
                }).catch(error => console.log(error));
            }} >

            <TextField
                label="شماره همراه"
                margin="normal"
                xs={12}
                id="phone"
                name="phone"
                helperText={touched.phone ? errors.phone : ""}
                error={touched.phone && Boolean(errors.phone)}
                value={phone}
                onChange={change.bind(null, "phone")}
            />
            <Button
                classes={{ root: "btn btn-login" }}
                type="submit"
                fullWidth
                disabled={!isValid}>دریافت کد</Button>
        </form>
    )
};

const mstp = state => ({ token: state.token, renderFormNock: state.renderFormNock });

export default connect(mstp)(LoginFormComponent);