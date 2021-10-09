import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAWGyalZFlC-UkyeQO0PFBewoImahkEKHo",
    authDomain: "databaseproject1-e14d9.firebaseapp.com",
    databaseURL: "https://databaseproject1-e14d9.firebaseio.com",
    projectId: "databaseproject1-e14d9",
    storageBucket: "databaseproject1-e14d9.appspot.com",
    messagingSenderId: "100675696516",
    appId: "1:100675696516:web:aac011aaf518a666bf4fd1",
    measurementId: "G-DMQ9PWZLR2"
  };
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;
// if firebase nahi tu run the existing app    