import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBqneqp4FKA3PfHmlEX2iQE5cSAHiDJs1w",
    authDomain: "story-hub-ef81d.firebaseapp.com",
    databaseURL: "https://story-hub-ef81d-default-rtdb.firebaseio.com",
    projectId: "story-hub-ef81d",
    storageBucket: "story-hub-ef81d.appspot.com",
    messagingSenderId: "755011507912",
    appId: "1:755011507912:web:62db0a1e3503d3ed53f7fd"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();