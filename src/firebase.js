// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsq97AxxKv2GMlVcx_I42ITr8rSQ1FL4s",
  authDomain: "natflix-d1d98.firebaseapp.com",
  projectId: "natflix-d1d98",
  storageBucket: "natflix-d1d98.appspot.com",
  messagingSenderId: "807169127314",
  appId: "1:807169127314:web:89fcdddd0ce3f42c48c74b",
  measurementId: "G-L7RJBPV32S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
