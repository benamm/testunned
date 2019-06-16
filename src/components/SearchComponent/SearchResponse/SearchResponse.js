import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { connect } from 'trim-redux';
import { Facebook } from 'react-content-loader';
import MyLoader from './CustomLoading/CustomLoading';

import { toPersianDigit, prettify } from '../../Helper/help';
import avatar from '../../../img/amazon.png';
import busImg from '../../../img/bilt_dexter_textile_motorcycle_shoes_750x750.jpg';

class SearchResponse extends Component {
    constructor(props) {
        super(props)
        this._nodes = new Map()
        this._handleClick = this.handleClick.bind(this);
    }

    handleClick(e, i) {
        const node = this._nodes.get(i);
        var element = document.getElementById(i);

        if (node.classList.contains('close-more')) {
            node.classList.remove("close-more");
            e.target.innerHTML = 'بستن ' + `<diV style="background: red;"><span className="arrows-up">
            </span></div>`
        } else {
            e.target.innerHTML = 'ادامه مطلب...';
            node.classList.add("close-more");
        }
    }

    render() {
        return (
            <div className="container-fluid feed-items-area">
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="card-columns response-content" ref={this.feeditemsRef}>
                            {
                                this.props.feedItems ?
                                    this.props.feedItems.map((item, index) => {
                                        return <div key={index} className="card">
                                            <div className="business-item">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col avatar-wrap">
                                                            <div className="row">
                                                                <div className="avatar d-block">
                                                                    <img className="img-fluid" src={`http://tpi.uneed.ir:7100/m/` + item.avatar} alt="Card image cap" />
                                                                </div>
                                                                <p className="d-block m-0"><span className="icon-star-fill"></span>{toPersianDigit(`${item.rate}`)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col business-header-description">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <p className="card-category">{item.category}</p>
                                                            <p className="card-text">{item.address}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body business-media p-0 card-img-top">
                                                    <div className="business-image text-center">
                                                        <img src={`http://tpi.uneed.ir:7100/m/` + item.media} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="action-bar">
                                                    <ul className="row px-0">
                                                        <li className="col-2 d-inline-block text-center action-bar-icon">
                                                            <Link to="">
                                                                {item.isLiked ? <span className="icon-bookmark-fill">
                                                                </span> : <span className="icon-bookmark"></span>}

                                                            </Link>
                                                        </li>
                                                        <li className="col-2 d-inline-block text-center action-bar-icon">
                                                            <Link to="" >
                                                                <span className="icon-share"></span>
                                                            </Link>
                                                        </li>
                                                        <li className="col-8 text-right d-inline-block action-bar-icon">
                                                            <Link to="">
                                                                {item.isLiked ? <span className="icon-heart-fill">
                                                                </span> : <span className="icon-heart">
                                                                    </span>}
                                                            </Link>
                                                            <span className="like-counter">{toPersianDigit(`${item.likeCount}`)}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {item.description ?
                                                    <div className="card-body context-wrap">
                                                        <div onClick={e => this.handleClick(e, index)} className="show-more-toggle">ادامه مطلب
                                                    </div>
                                                        <div>
                                                            <p style={{ fontSize: '13pt', color: '#000' }} className="close-more" ref={c => this._nodes.set(index, c)} id={index}>
                                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در.
                                                        </p>
                                                        </div>
                                                        <p className="business-item-created-at">{toPersianDigit('2')} ساعت پیش</p>
                                                    </div> : ''
                                                }
                                                {
                                                    item.commentCount ?
                                                        <div className="card-body comment-count">
                                                            <span>
                                                                <span className="icon-comment"></span>
                                                                مشاهده نظرات ({toPersianDigit(`${item.commentCount}`)} نظر)</span>
                                                        </div> : ''
                                                }
                                                <div className="card-body add-comment-wrap">
                                                    <form className="add-comment-form container p-0">
                                                        <div className="form-group row">
                                                            <div className="col-auto icon-user">
                                                                <span className="icon-profile">
                                                                </span>
                                                            </div>
                                                            <div className="col">
                                                                <textarea className="form-control" placeholder="پیام یا نظر خود را وارد کنید ..." />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    }) : <div>

                                        <div className="col-md-4">
                                            <MyLoader />
                                        </div>
                                        <div className="col-md-4">
                                            <MyLoader />
                                        </div>
                                        <div className="col-md-4">
                                            <MyLoader />
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = state => ({
    feedItems: state.feedItems
});

export default connect(mstp)(SearchResponse);