import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Provider } from 'trim-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

// initial state
import {state} from './store/init';

// Component
import App from './components/AppComponent/AppComponent';

// Source and libs
import './theme/vendor/bootstrap.min.css';
import './theme/vendor/iransans.css';
import './theme/scss/layout/layout.scss';
import './theme/vendor/uneed_icons.css';

const store = createStore(state, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('uneed'));