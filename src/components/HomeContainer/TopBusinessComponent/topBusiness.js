import React, { Component } from 'react';
import { setStore, connect } from 'trim-redux';
import axios from "axios";
import { Link } from "react-router-dom";
import Flickity from 'react-flickity-component';

import logo from '../../../img/Uneed_logo.png';
import star from '../../../img/star.svg';
import './topBusiness.scss'
import { toPersianDigit } from '../../Helper/help';

class TopBusiness extends Component {

    componentDidMount() {
        axios({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'get'
        }).then(
            response => {
                setStore({
                    topBusiness: response.data.slice(0, 50)
                })
            }).catch(error => {
                console.log(error)
            })
    }

    previous = () => {
        this.slider.slickPrev();
    }

    next = () => {
        this.slider.slickNext();
    }

    render() {
        let top_business;
        if (this.props.topBusiness) {

            const flickityOptions = {
                initialIndex: 2,
                pageDots: false,
                prevNextButtons: false,
                rightToLeft: true,
                freeScroll: true
            }

            top_business = <div className="row justify-content-center">
                <div className="col-md-11">
                    <Flickity
                        className={'carousel'}
                        elementType={'div'}
                        options={flickityOptions}
                    >
                        {
                            this.props.topBusiness.map((el, index) => {
                                return <div key={index} className="col-md-4">
                                    <Link to="/" className="top-buss-item row align-items-center"><div className="row">
                                        <div className="col-auto card-detail-img">
                                            <img className="card-img-top-Buss" src={logo} alt="Card image" />
                                        </div>
                                        <div className="col card-detail-txt">
                                            <div className="card-detail-top-Buss">
                                                <h5 className="business-title">{el.title}</h5>
                                                <h6 className="business-tags">عطر . ادکلن . ست هدیه</h6>
                                                <div className="row business-details">
                                                    <div className="col-7">
                                                        <p className="rating-avr d-inline-block">
                                                            <span className="fa fa-star">
                                                                <img className="star-svg" src={star} />
                                                            </span>
                                                            {toPersianDigit('4.5')}
                                                        </p>
                                                        <p className="rating-people-count d-inline-block">
                                                            ({toPersianDigit('865')}    نفر)
                                                        </p>
                                                    </div>
                                                    <div className="col-5 p-0">
                                                        <p className="address">خیابان آپادانا</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            })
                        }
                    </Flickity>
                </div>
            </div>
        }

        return (
            <div className="container-fluid top-bussines text-center">
                <p className="top-buss-title">کسب و کارهای برتر </p>
                {top_business}
            </div>
        )
    }
}

const mstp = state => ({
    topBusiness: state.topBusiness,
})

export default connect(mstp)(TopBusiness);