import React from 'react';
import {Link} from 'react-router-dom';
 
import ios_pic from '../../../img/001-apple.svg';
import android_pic from '../../../img/002-android.svg';

const FooterDownloadBox = () => {
    return (
        <div className="footer-download-box">
            <div className="download-market d-flex justify-content-center bd-highlight ">
                <div className="col-md-10 p-0">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="row download-box">
                                <div className="col-md-6 ios-info">
                                    <img alt="" src={ios_pic} />
                                    <span className="download-ios">دانلود نسخه iOS</span>
                                    <div className="links-ios">
                                        <Link to="" className="btn">
                                            <img alt="" src={ios_pic} />
                                            دانلود مستقیم
                                                  </Link>
                                        <Link to="" className="btn">
                                            <img alt="" src={ios_pic} />
                                            دانلود از سیب اپ
                                                  </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 android-info">
                                    <img alt="" src={android_pic} />
                                    <span className="download-android">دانلود نسخه Android</span>
                                    <div className="links-android">
                                        <Link to="" className="btn">
                                            <img alt="" src={ios_pic} />
                                            دانلود مستقیم
                                                  </Link>
                                        <Link to="" className="btn">
                                            <img alt="" src={ios_pic} />
                                            دانلود از سیب اپ
                                                  </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDownloadBox