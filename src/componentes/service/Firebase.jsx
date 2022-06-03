// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import "firebase/auth"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJScF-QR-I-J5XEaIhwWTK4gCT6L-2Aw",
  authDomain: "proyecto-coder-a1eed.firebaseapp.com",
  projectId: "proyecto-coder-a1eed",
  storageBucket: "proyecto-coder-a1eed.appspot.com",
  messagingSenderId: "86025021328",
  appId: "1:86025021328:web:842acb59869ce605f2f515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)

export default db



