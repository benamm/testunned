import React from 'react';

import FooterLinks from './FooterLinks/FooterLinks';
import FooterDownloadBox from './FooterDownloadBox/FooterDownloadBox.js';

import './footer.scss';

const Footer = () => {

    if(window.location.pathname === '/login' || window.location.pathname === '/sign-up' || window.location.pathname==="searchByMap" ||  window.location.pathname === '/search') return null // render null in footer page
    return (
        <footer className="container-fluid footer p-0">
            {/* <FooterLinks />
            <FooterDownloadBox />
            <div className="footer-copy-right">
            تمامی حقوق این وبسایت متعلق به یونید می‌باشد. | 1398©
            </div> */}
        </footer>
    )
}

export default Footer