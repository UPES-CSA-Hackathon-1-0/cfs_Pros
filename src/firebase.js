import firebase from 'firebase/compat/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDyzSL2MK-9-3bIVjkVIjHwKLbXAwS7d8g",
    authDomain: "homebox-9bbad.firebaseapp.com",
    projectId: "homebox-9bbad",
    storageBucket: "homebox-9bbad.appspot.com",
    messagingSenderId: "294446215680",
    appId: "1:294446215680:web:bfa66ce6e9f03a92881ee5",
    measurementId: "G-LCZZVQ0979"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };