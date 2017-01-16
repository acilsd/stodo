import React from 'react';
import List from '../List';
import Add from '../Add';
import Search from '../Search';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';
import styles from './style.scss';

const App = () => {
  return (
    <div class='main'>
      <Search />
      <List />
      <Add />
    </div>
  );
};

export default App;
