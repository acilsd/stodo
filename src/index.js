import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();

const container = document.getElementById('container');

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  container
);
