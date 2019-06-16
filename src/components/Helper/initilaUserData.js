import React, { Component } from 'react';
import { connect, setStore } from 'trim-redux';
import axios from 'axios';
import { setCookie, getCookie } from './cookieManager'

export const getServiceAndToken = () => {
    let services = '';
    let userDeviceInfo = {
        pl: 2,
        bl: 1,
        di: 'testing',
        dn: 'iphone',
        os: '11'
    }


    if (getCookie('t')) {
        axios({
            url: 'http://tpi.uneed.ir:7100/session/start',
            data: userDeviceInfo,
            method: 'POST'
        })
            .then(
                response => {
                    services = response.data.result.services
                })
            .catch(err => {
                console.log(err);
            });
    } else {
        axios({
            url: 'http://tpi.uneed.ir:7100/session/start',
            data: userDeviceInfo,
            method: 'POST'
        })
            .then(
                response => {
                    services = response.data.result.services
                    setCookie('t', response.data.result.token);
                })
            .catch(err => {
                console.log(err);
            });
    }

    return services;
}

