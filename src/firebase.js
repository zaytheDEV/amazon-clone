// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWwQ3AlgITquT6oSVbVsfoq2feotNzzdo",
    authDomain: "clone-db2cf.firebaseapp.com",
    projectId: "clone-db2cf",
    storageBucket: "clone-db2cf.appspot.com",
    messagingSenderId: "464043132068",
    appId: "1:464043132068:web:0b2d4a741df18f95c19231",
    measurementId: "G-XXTNK6QK9Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };