import React from 'react';
import axios from 'axios';
import { connect, setStore } from 'trim-redux';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { apiUrl } from '../../../Helper/constants'

const VerificationLoginComponent = props => {
    const {
        values: { verifyphone },
        errors,
        touched,
        onSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (verifyphone, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(verifyphone, true, false);
    };

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                axios({
                    method: 'POST', 
                    url: apiUrl + 'user/auth/login',
                    data: { cd: verifyphone, ms: 1},
                    headers: { 't': props.token }
                }).then((response) => {
                    setStore({
                        renderFormNock: true,
                    })

                    if(localStorage.getItem('userData')) {
                        var storedNames = JSON.parse(localStorage.getItem("userData"));
                    } else {
                        localStorage.setItem("userData", JSON.stringify(response.data.result.session.user));
                        // localStorage.setItem('firstName', response.data.result.session.user.name_first);
                    }

                }).catch(error => console.log(error))

            }} >

            <TextField
                label="کد دریافتی"
                margin="normal"
                xs={12}
                id="verifyphone"
                name="verifyphone"
                helperText={touched.verifyphone ? errors.verifyphone : ""}
                error={touched.verifyphone && Boolean(errors.verifyphone)}
                value={verifyphone}
                onChange={change.bind(null, "verifyphone")}
            />
            <Button
                classes={{ root: "btn btn-login" }}
                type="submit"
                fullWidth
                disabled={!isValid}>ورود</Button>
        </form>
    )
};

const mstp = state => ({ token: state.token, renderFormNock: state.renderFormNock });

export default connect(mstp)(VerificationLoginComponent);