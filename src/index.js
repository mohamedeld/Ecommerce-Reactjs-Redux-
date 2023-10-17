import React from 'react';
import ReactDOM from 'react-dom';
import "react-toastify/dist/ReactToastify.css";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './globalStatment/store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

