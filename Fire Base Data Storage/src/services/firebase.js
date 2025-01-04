
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";







//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK-Irl2Z_ROzgDw5Ryj8-0n7Dyb2a6mfo",
  authDomain: "second-c0c3c.firebaseapp.com",
  projectId: "second-c0c3c",
  storageBucket: "second-c0c3c.firebasestorage.app",
  messagingSenderId: "786656844647",
  appId: "1:786656844647:web:6f9b811675a28ba6a0adc2",
  measurementId: "G-131YJNTSJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);