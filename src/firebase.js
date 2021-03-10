import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJZdGaoDIaYKQxMKRuK-05akhSCZMKfBg",
    authDomain: "optima-mart.firebaseapp.com",
    projectId: "optima-mart",
    storageBucket: "optima-mart.appspot.com",
    messagingSenderId: "1008403079021",
    appId: "1:1008403079021:web:a67bd02c333f3748c20464",
    measurementId: "G-CYJ9SW1W86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
