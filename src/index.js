import 'babel-polyfill';
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


/*
gray
#E6E8E6

pink
#CA47D1;
rgba(202, 71, 209, 0.3);

green
#24D13B
rgba(36, 209, 59, 0.3);

red
#E36464
rgba(227, 100, 100, 0.3);
*/
