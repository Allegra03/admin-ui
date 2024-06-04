// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "sisi-klien.firebaseapp.com",
  projectId: "sisi-klien",
  storageBucket: "sisi-klien.appspot.com",
  messagingSenderId: "553030246195",
  appId: "1:553030246195:web:656168328d0a113e322846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();