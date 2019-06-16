import React, { Component } from 'react';

import SearchBox from './SearchBoxComponent/SearchBox';
import Navigation from '../NavigationComponent/Navigation';
import Intro from './IntrodoctionComponent/intro';
import JoinUs from './JoinUsComponent/joinUs';
import ShareApp from './ShareAppComponent/ShareAppComponent';
import TopBusiness from './TopBusinessComponent/topBusiness';

import './home.scss';

class HomeComponent extends Component {
    render() {
        return (
            <main className="row m-0">
                <SearchBox />
                <Navigation />
                <TopBusiness />
                <JoinUs />
                <TopBusiness />
                <ShareApp />
                <Intro />
            </main>
        )
    }
};

export default HomeComponent;