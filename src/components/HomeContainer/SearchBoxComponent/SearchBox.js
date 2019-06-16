import React, { Component } from 'react';
import { connect, setStore, getStore } from 'trim-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Select from 'react-styled-select';

import { getPosition } from '../../Helper/location';
import './searchBox.scss';
import { apiUrl } from '../../Helper/constants';

class SearchBox extends Component {

    loadlocation = async () => {
        // getPosition();
        await getPosition()
            .then((position) => {
                setStore({
                    selectedCity: { point: [position.coords.latitude, position.coords.longitude], label: 'مکان یاب خودکار', value: "0" }
                })
            })
    }

    componentDidMount() {
        this.allCityDatalist = []; // clone all records of city data
        this.cityRecords = []; // transform ${allCityDatalist} to readable data for react-select package 

        this.catRef = '';
        this.cityRef = '';

        /** ADD AUTO DETECT LOACTION ITEM IN CITY LIST SELECT  */
        const autoLocationFinderItem =
        {
            'label':
                <div onClick={this.loadlocation} className="auto-location-finder-searchbox">مکان یاب خودکار
                    <span className="icon-target"></span>
                </div>
            , value: "0"
        };



        axios.post(apiUrl + 'region/list', {}, {
            headers: { 't': 'vfOXiVZXKaXPUbr62z3GVZ9vEDGfhwxt29EFT2WylgU=' }
        }).then(response => {
            this.allCityDatalist = response.data.result.data.slice(1, 20);
            this.allCityDatalist.map((cityItem, index) => {
                this.cityRecords[index] = { label: cityItem.name, value: cityItem._id, point: [cityItem.point[0], cityItem.point[1]] };
            });
            this.cityRecords.unshift(autoLocationFinderItem);
            setStore({
                cityList: this.cityRecords,
            });
        });
    }

    goSearchPage = (city, cate) => {
        var promise = new Promise((resolve, reject) => {
            if (city == 0) {
                this.loadlocation();
            } else {

                this.props.cityList.filter((e) => {
                    if (e.value == city) {
                        setStore({
                            selectedCity: e
                        })
                    } else {
                    }
                });
            }

            this.props.services.filter((e) => {
                if (e._id == cate) {
                    setStore({
                        selectedCat: e
                    })
                }
            });
            resolve();
        });

        promise.then(() => {
            this.cityname = typeof this.props.selectedCity.label === 'string' ? this.props.selectedCity.label.replace(/\s+/g, '-') : '';
            this.catename = typeof this.props.selectedCat.name === 'string' ? this.props.selectedCat.name.replace(/\s+/g, '-') : '';

            this.props.history.push(`/search/${this.catename}/${this.cityname}`);
        }, function (error) { });
    }

    render() {
        return (
            <div className="col-md-12 search-box">
                <div className="d-flex align-items-center justify-content-center bd-highlight search-box">
                    <div className="p-2 bd-highlight col-md-12">
                        <h5 className="h5-detail-search-box">با انتخاب مکان خود کسب و کارهای اطرافتان مشاهده کنید</h5>
                        <div className="d-flex justify-content-center bd-highlight">
                            <div className="p-2 bd-highlight col-xl-8 col-md-10 form-row">
                                <div className="col-xl-5 col-md-6" id="where-are-you-searchbox">
                                    <span className="icon-address">
                                    </span>
                                    <Select
                                        noResultsText={"... در حال بارگذاری"}
                                        options={this.props.cityList}
                                        placeholder="کجا هستی"
                                        multi={false}
                                        classes={{
                                            selectValue: 'my-custom-value',
                                            selectArrow: 'my-custom-arrow'
                                        }}
                                        value={this.props.selectedCity.value ? this.props.selectedCity.value : ''}
                                        onChange={(e) => {
                                            this.cityRef = e;
                                            if (e == 0) { this.loadlocation() }
                                        }}
                                    />
                                </div>

                                <div className="col-xl-5 col-md-6" id="what-you-want">
                                    <Select
                                        options={this.props.servicesList}
                                        noResultsText={"... در حال بارگذاری"}
                                        placeholder="چی نیاز داری"
                                        classes={{
                                            selectValue: 'my-custom-value',
                                            selectArrow: 'my-custom-arrow',
                                            selectInputField: 'col-xl-4 col-sm-2'
                                        }}
                                        value={this.props.selectedCat._id}
                                        onValueClick={e => { this.catRef = e }}
                                    />
                                </div>

                                <div className="col-md-2 col-md-2">
                                    <button className="btn btn-lg btn-search" onClick={() => this.goSearchPage(this.cityRef, this.catRef)}>
                                        جستجو
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mstp = state => ({
    token: state.token,
    services: state.services,
    servicesList: state.servicesList,
    cityList: state.cityList,


    selectedCat: state.selectedCat,
    selectedCity: state.selectedCity
})

export default withRouter(connect(mstp)(SearchBox));