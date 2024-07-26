// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmifDxiCYTftPX8_iubOagDgi9ui9XC9M",
  authDomain: "react-script-sharing-platform.firebaseapp.com",
  projectId: "react-script-sharing-platform",
  storageBucket: "react-script-sharing-platform.appspot.com",
  messagingSenderId: "731555393463",
  appId: "1:731555393463:web:491cc5edfa2e821ff68232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut };