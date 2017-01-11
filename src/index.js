import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const container = document.getElementById('container');

render(
  <Provider store={store}>
    <div>Hai</div>
  </Provider>,
  container
);
