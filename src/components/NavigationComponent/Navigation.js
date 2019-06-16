import React, { Component } from 'react';
import { connect, setStore } from 'trim-redux';
import Slider from "react-slick";
import { Link, to } from "react-router-dom";
import Flickity from 'react-flickity-component';

import LoadingTemplate from './LoadingTemplate';

import './navigation.scss'

class Navigation extends Component {

    next = () => {
        this.flkty.next()
    }

    previous = () => {
        this.flkty.previous()
    }

    render() {

        let content;
        if (!this.props.servicesList.length) {

            content = <div className="col-11 text-center nav-loading-area">
                <div className="row">
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                    <div className="col-2">
                        <LoadingTemplate />
                    </div>
                </div>
            </div>;
        } else {
            const flickityOptions = {
                initialIndex: 8,
                pageDots: false,
                prevNextButtons: false,
                rightToLeft: true,
                draggable: true,
                // cellAlign: 'right',
                wrapAround: true
            }

            content = <div className="col-md-11">
                <div className="origin-navigation-wrap">
                    <span className="btn icon-arrows_left left nav-slider-arrow" onClick={this.previous}></span>
                    <Flickity
                        className={'header-carousel'}
                        elementType={'div'}
                        options={flickityOptions}
                        flickityRef={c => this.flkty = c}
                        setGallerySize={false}
                    >
                        {
                            this.props.servicesList.map((item, index) => {
                                return <Link key={index} to={`categories`}
                                    className="navigation-item carousel-cell col-5" >
                                    <div>
                                        <div className={`d-block icons-block ${item.icon}`}></div>
                                        <div
                                            className="btn">
                                            <div className="text">{item.label}</div>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </Flickity>
                    <span className="btn icon-arrows_right right nav-slider-arrow" onClick={this.next}></span>
                </div>
            </div>
        }

        return (
            <div className={`navigation container-fluid ` + this.props.className}>
                <div className="row justify-content-center">
                    {content}
                </div>
            </div>
        )
    }
}

const mstp = state => ({ services: state.services, servicesList: state.servicesList })

export default connect(mstp)(Navigation);