import React from 'react';

import './joinUs.scss';

const JoinUs = () => {
    return (
        <div className="container-fluid join-us-wrap">
            <div className="row d-flex content-start-center text-center join-us">
                <div className="m-auto">
                    <h4> یونید برای کسب و کار</h4>
                    <h5>
                     برای عضویت در یونید و ارائه خدمات خود به<br /> 
                        شهروندان روی دکمه زیر کلیک کنید.
                    </h5>
                    <button className="btn join-us-btn">
                        عضویت کسب و کار
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;