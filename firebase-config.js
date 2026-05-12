import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

  apiKey: "AIzaSyBe1LGlxur7QuoskSXY_sKZgHbtgu3gx-s",

  authDomain: "smart-tools-universe-f07f5.firebaseapp.com",

  projectId: "smart-tools-universe-f07f5",

  storageBucket: "smart-tools-universe-f07f5.firebasestorage.app",

  messagingSenderId: "1492041590",

  appId: "1:1492041590:web:7e47f82221c7dfeb9f8457",

  measurementId: "G-SXXQ7GHPXP"
};

/* INITIALIZE */

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

/* AUTH */

const auth = getAuth(app);

/* FIRESTORE */

const db = getFirestore(app);

/* GOOGLE PROVIDER */

const provider = new GoogleAuthProvider();

/* EXPORT */

export {

  auth,
  db,
  provider,

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,

  signInWithPopup,

  onAuthStateChanged,

  signOut,

  doc,
  setDoc,
  getDoc
};
