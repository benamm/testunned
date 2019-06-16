import React from 'react';

import location from '../../../img/refrence-location.png';
import conversition from '../../../img/conversition.png';
import showbusiness from '../../../img/showBusinessRef.png';


import './intro.scss';

const Intro = () => {
    return (
        <div className="container-fluid text-center how-use-uneed-contet">
            <p className="how-use-uneed">چگونه از یونید استفاده کنیم؟</p>
            <div className="row uneed-refrence">
                <div className="col-4 uneed-refrence-items">
                    <img alt="" src={location} />
                    <h6>انتخاب مکان خود</h6>
                    <p>انتخاب مکان خود
با تعیین آدرس دقیق خود می‌توانید
مسافت خود تا کسب و کارها را مشاهده کنید.</p>
                </div>
                <div className="col-4 uneed-refrence-items">
                    <img alt="" src={showbusiness} className="around-png"/>
                    <h6>مشاهده کسب و کارهای اطرافتان</h6>
                    <p>می‌توانید لیست آگهی‌های کسب و کارهای
محله دلخواهتان را مشاهده کنید.</p>
                </div>
                <div className="col-4 uneed-refrence-items">
                    <img alt="" src={conversition}/>
                    <h6>
                        
                    امکان گفتگو با کسب و کارها

                    </h6>
                    <p>می توانید درخواست‌های خود را مستقیم از طریق امکان
گفتگو به کسب و کارها ارسال کنید.
<br />
(فعلا فقط با اپلیکیشن یونید امکانپذیر است)
</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;   