import React from 'react';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';
import { BrowserRouter, Match, Miss } from 'react-router';

import Login from '../Login/';
import Main from '../Main/';
import Add from '../Add/';

import styles from './style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Login} />
        <Match pattern="/main" component={Main} />
        <Match pattern="/add" component={Add} />
      </div>
    </BrowserRouter>
  );
};

export default App;
