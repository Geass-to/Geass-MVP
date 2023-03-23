// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "geass-8fac8.firebaseapp.com",
  projectId: "geass-8fac8",
  storageBucket: "geass-8fac8.appspot.com",
  messagingSenderId: "1005637796160",
  appId: "1:1005637796160:web:8ea5c8d589aa3a73693aa5",
  measurementId: "G-NGJGGP0YVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app);