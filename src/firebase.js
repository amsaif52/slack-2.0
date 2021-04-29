import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxH6gpPfgJ3m2FqNMIFHf-IBxxSYOFuVU",
    authDomain: "slack-clone-yt-83552.firebaseapp.com",
    projectId: "slack-clone-yt-83552",
    storageBucket: "slack-clone-yt-83552.appspot.com",
    messagingSenderId: "886611741886",
    appId: "1:886611741886:web:3c2244cd488209118922ef",
    measurementId: "G-J5PHBX5HYY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provide = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    db,
    provide
};