// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKUM_cHO9Svviderd-XMb0L8nDZmykv1s",
    authDomain: "pocket-leisure.firebaseapp.com",
    projectId: "pocket-leisure",
    storageBucket: "pocket-leisure.appspot.com",
    messagingSenderId: "1035125589901",
    appId: "1:1035125589901:web:a425445be2f738fb261fc4",
    measurementId: "G-0G67RYHNDW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const db = firebase.firestore();