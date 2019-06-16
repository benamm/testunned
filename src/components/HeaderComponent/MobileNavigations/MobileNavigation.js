import React from 'react';
import {Link} from 'react-router-dom';

import './mobile-navigation.scss';

const MobileNavigation = () => {
    return (
        <nav class="navbar navbar-dark red lighten-1 mb-4">
            <button class="navbar-toggler second-button" type="button">
                {/* <div class="animated-icon2 open"><span></span><span></span><span></span><span></span></div> */}
                <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
            </button>
            {/* <div class="navbar-collapse collapse show" id="navbarSupportedContent23"> */}
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Features</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Pricing</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavigation;