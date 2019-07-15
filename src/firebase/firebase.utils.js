import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1aKFZZQ2_pkVYdfc56R-3s0hxlEgfTWg",
    authDomain: "pyramid-db.firebaseapp.com",
    databaseURL: "https://pyramid-db.firebaseio.com",
    projectId: "pyramid-db",
    storageBucket: "",
    messagingSenderId: "126949953074",
    appId: "1:126949953074:web:7dedbf0219339a03"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
 