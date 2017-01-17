import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './router';

import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

const container = document.getElementById('container');

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  container
);
