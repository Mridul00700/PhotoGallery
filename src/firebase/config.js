import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5asp_yoxfDp4OejcrxiUVM5fjsKrPBNs",
    authDomain: "gallery-photo-32533.firebaseapp.com",
    databaseURL: "https://gallery-photo-32533.firebaseio.com",
    projectId: "gallery-photo-32533",
    storageBucket: "gallery-photo-32533.appspot.com",
    messagingSenderId: "1070229739520",
    appId: "1:1070229739520:web:e4a6c9bc64e0944cf520e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage =    firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFireStore, timestamp };