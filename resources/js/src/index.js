import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './modules/App';
import 'antd/dist/antd.css';

import { Provider } from "react-redux";
import store from './store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/sass/style.scss';
import './assets/sass/app.scss';
// import './assets/sass/responsive.scss';

// window.jQuery = window.$ = require('jquery/dist/jquery.min');
// require ('bootstrap/dist/js/bootstrap.js');



ReactDOM.render(
    <Provider store={store}>
        <Landing />
    </Provider>
    , document.getElementById('app'));