import firebase from "@firebase/app";
import 'firebase/firebase-auth';
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDNScAqqP70Q8dUaI8uC5CB4G3PQrcL4K0",
    authDomain: "habit-builder-b8b73.firebaseapp.com",
    databaseURL: "https://habit-builder-b8b73.firebaseio.com",
    projectId: "habit-builder-b8b73",
    storageBucket: "habit-builder-b8b73.appspot.com",
    messagingSenderId: "964089724818",
    appId: "1:964089724818:web:2a787ea3c6ad16492acb4b",
    measurementId: "G-NG5H7HDYP9"
};
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };