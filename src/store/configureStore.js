import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

function _applyMiddleware() {
  const middleware = [
    logger,
    thunk
  ];
  return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
  const store = compose(
    _applyMiddleware(),    
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
