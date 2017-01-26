import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();

const container = document.getElementById('container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
