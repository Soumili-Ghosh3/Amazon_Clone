import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAMPXmyHSL1gmX1hVi09PjeJBHsg5FzBbA",
    authDomain: "clone-mar21-b749f.firebaseapp.com",
    projectId: "clone-mar21-b749f",
    storageBucket: "clone-mar21-b749f.appspot.com",
    messagingSenderId: "1050865052183",
    appId: "1:1050865052183:web:eec158707328c4bc30ca52",
    measurementId: "G-P13PB0055F"
  });

  const db = firebase.firestore();

  export {db}