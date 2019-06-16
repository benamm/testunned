import React from 'react';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';

import AuthPopover from './authPopover/loginPopover';
import MobileNavigation from './MobileNavigations/MobileNavigation';
import './header.scss';

import logo from '../../img/logo.png';

import mapLogoInHeader from '../../img/header-map-logo.png';
import mapLogoInHeaderPhone from '../../img/001-placeholder.svg';

export const Header = () => {
    return (
        <div>
            <MediaQuery orientation="landscape">
                <header className="row mx-0 d-block header" >
                    <div className="d-flex text-center main-header">
                        <AuthPopover />
                        <div className="p-2 col-4 bd-highlight">
                            <Link to="/"><img src={logo} className="header-logo" alt="" /></Link>
                        </div>
                        <div className="p-2 col-4 bd-highlight">
                            <Link to={'/explore'} type="Link" className="btn go-map-page">
                                <img alt="" src={mapLogoInHeader} />
                                <span>نمایش روی نقشه</span>
                            </Link>
                        </div>
                    </div>
                </header>
            </MediaQuery>

            <MediaQuery orientation="portrait">
                <header className="row mx-0 d-block header" >
                    <div className="text-center main-header">
                        <div className="col-12" style={{ height: '50px' }}>
                            <Link to="/"><img src={logo} className="header-logo" alt="" /></Link>
                        </div>
                        <div className="col-12">
                            <div className="d-flex text-center">
                                <div className="col-4">
                                    <MobileNavigation />
                                </div>
                                    <AuthPopover />
                                <div className="col-4">
                                    <Link to={'/explore'} type="Link" className="btn go-map-page">
                                        <img alt="" src={mapLogoInHeaderPhone} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </MediaQuery>
        </div>
    )
}

export default Header;