// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9rDn9QiHAfHduY8Ubr5sBs1Z3RTAydtg",
  authDomain: "smartflix-2a808.firebaseapp.com",
  projectId: "smartflix-2a808",
  storageBucket: "smartflix-2a808.appspot.com",
  messagingSenderId: "934235875185",
  appId: "1:934235875185:web:1411af5c65bf59d20238d0",
  measurementId: "G-8V8RR9VQEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();