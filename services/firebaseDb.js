// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpL0dsKa4Wi4yzEFwK5Epf-wfM0-Ich_w",
  authDomain: "tse-commu-b7030.firebaseapp.com",
  projectId: "tse-commu-b7030",
  storageBucket: "tse-commu-b7030.appspot.com",
  messagingSenderId: "889125275558",
  appId: "1:889125275558:web:67a6cc71d0b1b333ae7167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDpL0dsKa4Wi4yzEFwK5Epf-wfM0-Ich_w",
//   authDomain: "tse-commu-b7030.firebaseapp.com",
//   projectId: "tse-commu-b7030",
//   storageBucket: "tse-commu-b7030.appspot.com",
//   messagingSenderId: "889125275558",
//   appId: "1:889125275558:web:67a6cc71d0b1b333ae7167"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// export default firebase;