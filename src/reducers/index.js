import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todo from './todo';
import modals from './modals';

const rootReducer = combineReducers({
  //routing: routerReducer,
  todo,
  modals
});

export default rootReducer;
