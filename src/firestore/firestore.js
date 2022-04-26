// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAteJO-409tWwUuAH0EsJSyfrCyv0svjQ",
  authDomain: "react-redux-notetaker.firebaseapp.com",
  projectId: "react-redux-notetaker",
  storageBucket: "react-redux-notetaker.appspot.com",
  messagingSenderId: "60630492830",
  appId: "1:60630492830:web:a405cd40e61e0a748dbd8f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db, collection, query, where, getDocs, addDoc, updateDoc}