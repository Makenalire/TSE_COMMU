// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  getDocs,
  setDoc,
  doc,
  collection,
  Query,
  query,
  DocumentReference,
  SetOptions,
  serverTimestamp,
  updateDoc,
  Firestore,
  CollectionReference,
  DocumentData,
  Timestamp,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHc2mjTFeLJiu2V7OwxaJaI3TfJ_ajF4Y",
  authDomain: "almighty-database-tse.firebaseapp.com",
  projectId: "almighty-database-tse",
  storageBucket: "almighty-database-tse.appspot.com",
  messagingSenderId: "110872639604",
  appId: "1:110872639604:web:01bd42afd671576ccef921",
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig, "chatDB");
} else {
  app = getApp();
}

export const firebaseService = {
  db: getFirestore(app),
  serverTime: () => {
    return Timestamp.now();
  },
  getdbDoc: (ref: DocumentReference<any>) => {
    return getDoc(ref);
  },
  getdbDocs: (q: Query<DocumentData>) => {
    return getDocs(q);
  },
  docData: (
    db: CollectionReference<DocumentData>,
    path?: string | undefined,
    ...pathSegments: string[]
  ) => {
    return doc(db, path, ...pathSegments);
  },
  setdbDoc: (
    ref: DocumentReference<unknown>,
    data: Partial<unknown>,
    options: SetOptions
  ) => {
    return setDoc(ref, data, options);
  },
  adddbDoc: (ref: CollectionReference<any>, data: any) => {
    return addDoc(ref, data);
  },
  deletedbDoc: (ref: DocumentReference<unknown>) => {
    return deleteDoc(ref);
  },
  updatedbDoc: (ref: DocumentReference<unknown>, data: Partial<unknown>) => {
    return updateDoc(ref, data);
  },
  docCollection: (db: Firestore, path: string, ...pathSegments: any) => {
    return collection(db, path, ...pathSegments);
  },
  dbQuery: (q: Query<unknown>, ...queryConstraints: any) => {
    return query(q, ...queryConstraints);
  },
};
