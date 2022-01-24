import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBef0m80DBaNLNo40x7K7JMjRUre6G4ClI",
    authDomain: "store-abecb.firebaseapp.com",
    projectId: "store-abecb",
    storageBucket: "store-abecb.appspot.com",
    messagingSenderId: "504929083383",
    appId: "1:504929083383:web:ddbf64420bad690f3598f2",
    measurementId: "G-H4S87QK215"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();