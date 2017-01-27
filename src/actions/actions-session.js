/*eslint no-console: off*/
import { LOG_IN, LOG_OUT } from '../constants/';
import { signin, signOut, ghProvider } from '../firebase';

export const login = () => {
  return (dispatch) => {
    return signin.signInWithPopup(ghProvider).then((res) => {
      dispatch({
        type: LOG_IN
      });
    }, err => console.error(err));
  };
};

export const logout = () => {
  return (dispatch) => {
    return signOut.then(() => {
      dispatch({
        type: LOG_OUT
      });
    }, err => console.error(err));
  };
};
