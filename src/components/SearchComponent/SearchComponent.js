import React, { Component } from 'react';
import axios from 'axios';
import { connect, setStore, getStore } from 'trim-redux';
import { apiUrl, apiUrlMedia } from '../Helper/constants';
import { withRouter } from 'react-router-dom';

import SearchCarousel from './SearchCarousel/SearchCarousel';
import SearchBox from '../HomeContainer/SearchBoxComponent/SearchBox';
import Navigation from '../NavigationComponent/Navigation';
import SearchResponse from './SearchResponse/SearchResponse';

import './search.scss';

class SearchComponent extends Component {

    fetchData = async () => {
        const response = await axios.post(apiUrl + 'feed/items',
            this.props.selectedCity.point && this.props.selectedCat._id ? { lt: this.props.selectedCity.point[0], ln: this.props.selectedCity.point[1], si: this.props.selectedCat._id } :
                this.props.selectedCity.point ? { lt: this.props.selectedCity.point[0], ln: this.props.selectedCity.point[1] } :
                    this.props.selectedCat._id ? { si: this.props.selectedCat._id } : ''
            , { headers: { 't': 'vfOXiVZXKaXPUbr62z3GVZ9vEDGfhwxt29EFT2WylgU=' } })
        const sliderItems = response.data.result.items.filter(el => el.type === 1).map(el => el.slider.items);
        const sliderItemsTransformed = [];
        sliderItems[0].map((e, index) => {
            sliderItemsTransformed.push(
                {
                    id: e._id,
                    url: e.url,
                    caption: e.cover.caption,
                    media: e.cover.hash
                }
            )
        });

        const businessPromis = [];
        response.data.result.items.filter(el => el.type === 0).forEach(
            el => el.post.business.media[0] ?
                businessPromis.push({
                    name: el.post.business.name,
                    avatar: el.post.business.avatar.hash ? el.post.business.avatar.hash : '',
                    description: el.post.business.description,
                    category: el.post.business.service.name,
                    address: el.post.business.address,
                    media: el.post.business.media[0].hash,
                    likeCount: el.post.lkCount,
                    isBooked: el.post.isBooked,
                    isLiked: el.post.isLiked,
                    shareLink: el.post.shareLink,
                    rate: el.post.business.rate,
                    commentCount: el.post.cmCount
                })
                : businessPromis.push({
                    name: el.post.business.name,
                    avatar: el.post.business.avatar ? el.post.business.avatar.hash : '',
                    description: el.post.business.description,
                    category: el.post.business.service.name,
                    address: el.post.business.address,
                    isLiked: el.post.isLiked,
                    media: '',
                    likeCount: el.post.lkCount,
                    isBooked: el.post.isBooked,
                    shareLink: el.post.shareLink,
                    rate: el.post.business.rate,
                    commentCount: el.post.cm
                })
        );

        const promiseResult = await Promise.all(businessPromis);
        const promisSlider = await Promise.all(sliderItemsTransformed);
        setStore({
            sliderItems: promisSlider,
            feedItems: promiseResult
        });
    }

    async componentDidMount() {
        this.fetchData();
    }


    componentDidUpdate = async (nextProps) => {
        if (this.props.selectedCat !== nextProps.selectedCat || this.props.selectedCity !== nextProps.selectedCity) {
            this.fetchData();
        } else if (this.props.pg !== nextProps.pg) {
            const response1 = await axios.post(apiUrl + 'feed/items',
                this.props.selectedCity.point && this.props.selectedCat._id ? { lt: this.props.selectedCity.point[0], ln: this.props.selectedCity.point[1], si: this.props.selectedCat._id, pg: this.props.pg } :
                    this.props.selectedCity.point ? { lt: this.props.selectedCity.point[0], ln: this.props.selectedCity.point[1], pg: this.props.pg } :
                        this.props.selectedCat._id ? { si: this.props.selectedCat._id, pg: this.props.pg } : ''
                , { headers: { 't': 'vfOXiVZXKaXPUbr62z3GVZ9vEDGfhwxt29EFT2WylgU=' } })
            const businessPromis1 = [];
            response1.data.result.items.filter(el => el.type === 0).forEach(
                el => el.post.business.media[0] ?
                    businessPromis1.push({
                        name: el.post.business.name,
                        avatar: el.post.business.avatar.hash ? el.post.business.avatar.hash : '',
                        description: el.post.business.description,
                        category: el.post.business.service.name,
                        address: el.post.business.address,
                        likeCount: el.post.lkCount,
                        isBooked: el.post.isBooked,
                        rate: el.post.rate,
                        shareLink: el.post.shareLink
                    })
                    : businessPromis1.push({
                        name: el.post.business.name,
                        avatar: el.post.business.avatar ? el.post.business.avatar.hash : '',
                        description: el.post.business.description,
                        category: el.post.business.service.name,
                        address: el.post.business.address,
                        likeCount: el.post.lkCount,
                        isBooked: el.post.isBooked,
                        rate: el.post.rate,
                        shareLink: el.post.shareLink
                    })
            );
            const promiseResult1 = await Promise.all(businessPromis1);
            const feeed = [...this.props.feedItems, ...promiseResult1];
            setStore({
                feedItems: feeed
            });
        }
    }

    render() {
        window.onscroll = function (ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                let pagination = getStore('pg');
                // you're at the bottom of the page
                if (getStore('feedItems').length) {
                    setStore({
                        pg: pagination + 1
                    })
                }
            }
        };
        return (
            <div className="row search-content">
                <SearchBox />
                {this.props.sliderItems ? <SearchCarousel /> : ''}
                <Navigation />
                {this.props.feedItems ? <SearchResponse /> : ''}
            </div>
        )
    }
};

const mstp = state => ({
    token: state.token,
    services: state.services,
    cityList: state.cityList,
    feedItems: state.feedItems,
    sliderItems: state.sliderItems,

    selectedCat: state.selectedCat,
    selectedCity: state.selectedCity,
    pg: state.pg
})

export default withRouter(connect(mstp)(SearchComponent));