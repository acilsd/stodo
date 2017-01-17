import React from 'react';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';
import styles from './style.scss';

const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default App;
