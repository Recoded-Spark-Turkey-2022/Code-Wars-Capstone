import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDg04rR0NyAWIB80vcxjIB5EXJrc250WNA",
  authDomain: "fir-basics-9b143.firebaseapp.com",
  databaseURL: "https://fir-basics-9b143-default-rtdb.firebaseio.com",
  projectId: "fir-basics-9b143",
  storageBucket: "fir-basics-9b143.appspot.com",
  messagingSenderId: "566745326640",
  appId: "1:566745326640:web:c11aa6fd5c09cf626639f5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const facebookAuth = new FacebookAuthProvider();
