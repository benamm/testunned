import React from 'react';

import phone_pic from '../../../../img/phone-pic.png';
import ios_pic from '../../../../img/001-apple.svg';
import android_pic from '../../../../img/002-android.svg';

const DownloadAppLinkComponent = () => (
    <div className="download-market d-flex justify-content-center bd-highlight mb-3">
        <div className="col-md-8 p-0">
            <div className="row">
                <div className="col-10">
                    <div className="row download-box">
                        <div className="col-md-6 ios-info">
                            <img alt="" src={ios_pic} />
                            <span className="download-ios">دانلود نسخه iOS</span>
                            <div className="links-ios">
                                <button className="btn">
                                    <img alt="" src={ios_pic} />
                                    دانلود مستقیم
                                                  </button>
                                <button className="btn">
                                    <img alt="" src={ios_pic} />
                                    دانلود از سیب اپ
                                                  </button>
                            </div>
                        </div>
                        <div className="col-md-6 android-info">
                            <img alt="" src={android_pic} />
                            <span className="download-android">دانلود نسخه Android</span>
                            <div className="links-android">
                                <button className="btn">
                                    <img alt="" src={ios_pic} />
                                    دانلود مستقیم
                                                  </button>
                                <button className="btn">
                                    <img alt="" src={ios_pic} />
                                    دانلود از سیب اپ
                                                  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 p-0 phone-img">
            <img alt="" src={phone_pic} />
        </div>
    </div>
)

export default DownloadAppLinkComponent;