import {
  LOG_IN,
  LOG_OUT,
  TEST3
} from '../constants/';

const initialState = {
  loggedIn: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOG_IN:
    return {...state, loggedIn: true};
  case LOG_OUT:
    return {...state, loggedIn: false};
  case TEST3:
    return {...state};
  default:
    return state;
  }
}
