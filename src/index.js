import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//setup redux
import store from './redux/configStore'
import { Provider } from 'react-redux';
import '../src/assets/css/main.css'
import '../src/assets/css/util.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/fonts/linearicons-v1.0.0/icon-font.min.css'
import './assets/css/animsition.min.css'
import './assets/css/slick.css'
import './assets/css/animate.css'
import './assets/css/hamburgers.min.css'



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
