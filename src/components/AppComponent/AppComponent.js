/**
 * MOST NEED REACT JS
 */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect, setStore } from 'trim-redux';

/**
 *  MOST NEED UNEED COMPONENTS
 */
import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';
import HomeComponent from '../HomeContainer/Home';
import Login from '../AuthComponent/LoginComponent/LoginComponent';
import Signup from '../AuthComponent/SignupComponent/SignupComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import SearchByMap from '../searchByMap/SearchByMap';
import Business from '../Business/Business'

/**
 * MOST NEED HELPER FUNCTIONS
 */
import { getPosition } from '../Helper/location';
import { sessionStart } from './InitialData/InitialData';
import { setCookie, getCookie } from '../Helper/cookieManager';

class App extends Component {
  servicesData = [];

  async componentDidMount() {
    await sessionStart().then((response) => {
      if (response.session) {
        setCookie('t', response.session.token)
        setStore({
          services: response.services,
          token: response.session.token,
        });
      } else {
        setStore({
          services: response,
          token: getCookie('t')
        });
      }

      //* LOAD CATEGORY DATA FROM STORE AND PUSH CATEGORY LIST SELECT CATEGORY
      if (this.props.services) {
        Promise.all(
          this.props.services.map((e, index) => {
            this.nav_icon = '';
            switch (e.name) {
              case 'لوازم الکترونیکی':
                this.nav_icon = 'icon-service-electronics'
                break;
              case 'املاک':
                this.nav_icon = 'icon-service-real-estate'
                break;
              case 'شرکت ساختمانی':
                this.nav_icon = 'icon-service-buildings'
                break;
              case 'وسایل نقلیه':
                this.nav_icon = 'icon-service-taxi'
                break;
              case "مد و پوشاک":
                this.nav_icon = 'icon-service-fashion'
                break;
              case "ورزش":
                this.nav_icon = 'icon-service-swim'
                break;
              case "کتاب، فرهنگ و هنر":
                this.nav_icon = 'icon-service-book'
                break;
              case "آرایشی و بهداشتی":
                this.nav_icon = 'icon-service-makeup'
                break;
              case "سرگرمی و فراغت":
                this.nav_icon = 'icon-service-bolling'
                break;
              case "فروشگاه موبایل":
                this.nav_icon = 'icon-service-mobile'
                break;
              case "مغازه":
                this.nav_icon = 'icon-service-shop'
                break;
              default:
            }
            return this.servicesData[index] = { label: e.name, value: e._id, icon: this.nav_icon }
          })
        )
          .then(result => {
            setTimeout(() => {
              setStore({
                servicesList: result
              })
            }, 5000)
          })
      }
    });
  }

  render() {
    if (this.props.token) {
      return (
        <div className="container-fluid px-0">
          <Header />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/search/:category?/:city?" component={SearchComponent} />

            <Route path="/login" exact component={Login} />
            <Route path="/sign-up" exact component={Signup} />
            <Route path="/explore" component={SearchByMap} token={this.props.token} />
            <Route path="/Business/:id" component={Business} />
          </Switch>
          <Footer />
        </div>)
    } else {
      return (<div className="first-loading">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>)
    }
  }
}

const mstp = state => ({
  services: state.services,
  token: state.token,
  servicesList: state.servicesList
});

export default withRouter(connect(mstp)(App))