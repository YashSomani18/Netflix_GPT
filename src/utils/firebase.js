// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0dGPxJ3aP0eCt_iRpNX2KvHsNkG970nY",
  authDomain: "netflix-gpt-4a7b8.firebaseapp.com",
  projectId: "netflix-gpt-4a7b8",
  storageBucket: "netflix-gpt-4a7b8.appspot.com",
  messagingSenderId: "762288724019",
  appId: "1:762288724019:web:e7521034f76c4ae11d6b46",
  measurementId: "G-T9TNF4DYYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();