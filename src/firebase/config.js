import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCSO3L1gJ86dkzajcJn1cYe2zet7ZWfCLo",
  authDomain: "chat-app-e4b56.firebaseapp.com",
  projectId: "chat-app-e4b56",
  storageBucket: "chat-app-e4b56.appspot.com",
  messagingSenderId: "53641753848",
  appId: "1:53641753848:web:100021d155905cb55ab70d",
  measurementId: "G-BSJKXXEDB4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
