/*eslint no-console: off*/
import { LOG_IN, LOG_OUT, CHECK_SESSION } from '../constants/';
import { signin, signOut, ghProvider } from '../firebase';

export const login = () => {
  return (dispatch) => {
    return signin.signInWithPopup(ghProvider).then((res) => {
      const { displayName, photoURL, uid } = res.user;
      const data = { name: displayName, img: photoURL };
      window.localStorage.setItem('user_task', JSON.stringify({ ...data, uid }));
      dispatch(storeSession(uid, data));
    }, err => console.error(err));
  };
};

export const logout = () => {
  return (dispatch) => {
    return signOut.then(() => {
      window.localStorage.removeItem('user_task');
      dispatch(clearSession());
    }, err => console.error(err));
  };
};

const storeSession = (uid, obj) => ({ type: LOG_IN, uid, data: obj });

const clearSession = () => ({ type: LOG_OUT });

export const restoreSession = (obj) => (dispatch) => dispatch(setUserData(obj));

const setUserData = (obj) => ({ type: CHECK_SESSION, uid: obj.uid, user: { name: obj.name, img: obj.img } });
