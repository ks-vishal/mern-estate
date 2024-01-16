// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-esate-6d41f.firebaseapp.com",
  projectId: "mern-esate-6d41f",
  storageBucket: "mern-esate-6d41f.appspot.com",
  messagingSenderId: "417280223742",
  appId: "1:417280223742:web:32a353f6c29dbf68bab8af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
