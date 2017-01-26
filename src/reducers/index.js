import { combineReducers } from 'redux';
import todo from './todo';
import modals from './modals';

const rootReducer = combineReducers({
  todo,
  modals
});

export default rootReducer;
