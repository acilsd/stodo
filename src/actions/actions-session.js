/*eslint no-console: off*/
import { LOG_IN, LOG_OUT, CHECK_SESSION } from '../constants/';
import { signin, signOut, ghProvider } from '../firebase';


export const login = () => {
  return (dispatch) => {
    return signin.signInWithPopup(ghProvider).then((res) => {
      const { displayName, photoURL, uid } = res.user;
      const data = {
        name: displayName,
        img: photoURL
      };
      window.localStorage.setItem('uid', uid);
      dispatch(storeSession(
        uid, data));
    }, err => console.error(err));
  };
};

export const logout = () => {
  return (dispatch) => {
    return signOut.then(() => {
      window.localStorage.removeItem('uid');
      dispatch(clearSession());
    }, err => console.error(err));
  };
};

const storeSession = (uid, obj) => {
  return {
    type: LOG_IN,
    uid,
    data: obj
  };
};


const clearSession = () => {
  return {
    type: LOG_OUT
  };
};
