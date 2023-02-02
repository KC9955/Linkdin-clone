import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6j-wh_ppmcpipbpqD6dqtRVW_GhLwfC4",
  authDomain: "linkdin-clone-26ecc.firebaseapp.com",
  projectId: "linkdin-clone-26ecc",
  storageBucket: "linkdin-clone-26ecc.appspot.com",
  messagingSenderId: "424403844446",
  appId: "1:424403844446:web:e2fc59511a473725d7a3cf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
