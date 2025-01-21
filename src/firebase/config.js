// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa636m38bX9S_RdBdE6xW8s5iabSil2lQ",
  authDomain: "react-firebase-ed594.firebaseapp.com",
  projectId: "react-firebase-ed594",
  storageBucket: "react-firebase-ed594.firebasestorage.app",
  messagingSenderId: "39155326297",
  appId: "1:39155326297:web:db28d36e01ac94022dc048",
  measurementId: "G-L54QD82CMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
