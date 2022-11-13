// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq0pofQHO1sbh_VToScU2qUdQQRrK1PBk",
  authDomain: "tsecommucovid.firebaseapp.com",
  projectId: "tsecommucovid",
  storageBucket: "tsecommucovid.appspot.com",
  messagingSenderId: "1088301303487",
  appId: "1:1088301303487:web:227f189f74d5a5e71ea80a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,"Covid");
const analytics = getAnalytics(app);

export const db = getFirestore(app)