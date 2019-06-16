import React, { Component } from 'react';
import { connect } from 'trim-redux';

import ShareAppWithSMSComponent from './ShareAppWithSMSComponent/ShareAppWithSMSComponent';
import DownloadAppLinkComponent from './DownloadAppLinkComponent/DownloadAppLinkComponent';
import './ShareApp.scss';

class ShareApp extends Component {
    render() {
        return (
            <div className="container-fluid download-Section text-center p-0">
                <div className="download-links">
                    <ShareAppWithSMSComponent />
                    <DownloadAppLinkComponent />
                </div>
            </div >
        )
    }
}

const mstp = state => ({
    token: state.token
})

export default connect(mstp)(ShareApp);