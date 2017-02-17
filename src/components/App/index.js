import React from 'react';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';
import NavBar from '../NavBar';

import { AppRoutes } from '../../router';

const App = () => {
  return (
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  );
};

export default App;
