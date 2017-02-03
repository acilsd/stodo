import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';

import App from './components/App';

const store = configureStore();

const container = document.getElementById('container');

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  container
);
