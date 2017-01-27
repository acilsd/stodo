/*eslint no-console: off*/
const Firebase = require('firebase/app');
const database = require('firebase/database');

const config = {
  apiKey: "AIzaSyBHX5D5f0_-sBlWS7iOHc6anmOCD-KREG4",
  authDomain: "supertodo-9770f.firebaseapp.com",
  databaseURL: "https://supertodo-9770f.firebaseio.com",
  storageBucket: "supertodo-9770f.appspot.com",
  messagingSenderId: "362268761852"
};

Firebase.initializeApp(config);

export const fbRef = database().ref();
