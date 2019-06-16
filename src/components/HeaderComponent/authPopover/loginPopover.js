import React, { Component } from 'react';
import { connect, setStore } from 'trim-redux';
import axios from 'axios';
import MediaQuery from 'react-responsive';

import { Link, to } from 'react-router-dom';

import authLogoInHeaderPhone from '../../../img/002-login-square-arrow-button-outline.svg';

class AuthPopover extends Component {

    containerRegisterForm = React.createRef();
    registerInputRef = React.createRef();
    loginInputRef = React.createRef();
    zIndexRegisterForm = '';
    firstStepOnRegister = true;

    sayWelcome = '';

    error = '';

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    registerPopoverToggle = (e) => {
        setStore({
            registerPopover: this.props.registerPopover === true ? false : true,
        });
        this.zIndexRegisterForm = 99;
    }

    handleClickOutside = event => {
        if (this.containerRegisterForm.current && !this.containerRegisterForm.current.contains(event.target)) {
            setStore({
                registerPopover: false,
            });
            this.zIndexRegisterForm = 0
        }
    };

    componentDidUpdate = (nextProps) => {
        if (this.props.currentUser) {
            this.sayWelcome = 'خوش امدی' + this.props.currentUser;
        }
    }

    render() {
        let registerTemplate = '';
        registerTemplate = <div>
            <ul className="supertips-box" >
                <li className="user-menu-item">
                    <Link to="" >
                        <span className="list-icon-supertips-box icon-view-cart"></span>
                        <span className="list-title-supertips-box">حساب کاربری من</span>
                    </Link>
                </li>

                <hr className="gap" />
                
                <li className="user-menu-item">
                    <Link to="" >
                        <span className="list-icon-supertips-box icon-exit"></span>
                        <span className="list-title-supertips-box">خروج از حساب</span>
                    </Link>
                </li>
            </ul>

        </div>

        let userBehavoir = '';

        if (localStorage.getItem('firstName')) {
            userBehavoir = <div className="user-welcome-content">
                <div onClick={this.registerPopoverToggle} className="d-inline-block">
                    <span className="icon-profile-fill">
                    </span>
                </div>
                سلام   {localStorage.getItem('firstName')} خوش اومدی  </div>
        } else {
            userBehavoir = <span>
                <Link to="" to="/login" className="btn sign-in">ورود</Link>
                <Link to="" to="/sign-up" className="btn sign-up">عضویت</Link>
            </span>
        }

        return (
            <div className="p-2 bd-highlight col-4 authtab-header">
                <span style={{ zIndex: this.zIndexRegisterForm }} className="register-form" ref={this.containerRegisterForm}>
                    <MediaQuery orientation="portrait">
                        <img className="auth-icon-in-header" onClick={this.registerPopoverToggle} src={authLogoInHeaderPhone} alt="" />
                    </MediaQuery>
                    <MediaQuery orientation="landscape">
                        {userBehavoir}
                    </MediaQuery>
                    <div className={`popover fade bs-popover-bottom  ${this.props.registerPopover === true ? 'show' : ''}`}>
                        <div className="arrow"></div>
                        {registerTemplate}
                    </div>
                </span>
                {this.sayWelcome}
            </div>
        )
    }
}

const mstp = state => ({
    currentUser: state.currentUser,
    registerPopover: state.registerPopover,
    token: state.token,
})

export default connect(mstp)(AuthPopover)