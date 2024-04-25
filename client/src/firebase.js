// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8e7fe.firebaseapp.com",
  projectId: "mern-estate-8e7fe",
  storageBucket: "mern-estate-8e7fe.appspot.com",
  messagingSenderId: "468751248507",
  appId: "1:468751248507:web:d7845be0e74afb286706de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);