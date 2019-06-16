import React from 'react';
import {Link} from 'react-router-dom';

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <div className="d-flex align-items-center bd-highlight mb-3">
                <Link to="" className="p-2 bd-highlight">درباره یونید</Link>
                <Link to="" className="p-2 bd-highlight">قوانین و مقررات</Link>
                <Link to="" className="p-2 bd-highlight">حریم خصوصی</Link>
                <Link to="" className="p-2 bd-highlight">سوالات متداول</Link>
                <Link to="" className="p-2 bd-highlight">تماس با ما</Link>
                <div className="ml-auto p-2 bd-highlight contact-unedd">پشتیبانی: ۰۲۱-۸۸۸۸۵۵۲۲</div>
            </div>
        </div>
    )
}

export default FooterLinks