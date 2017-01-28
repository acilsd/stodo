import React from 'react';
import normalize from '../../../node_modules/node-normalize-scss/_normalize.scss';
import { BrowserRouter } from 'react-router';

import { AppRoutes } from '../../router';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
