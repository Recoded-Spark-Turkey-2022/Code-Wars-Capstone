import { initializeApp } from "firebase/app";  

const firebaseConfig = {
    apiKey: "AIzaSyB-lIwSHr8JegZMANEQv05TnJklZfSNBHc",
    authDomain: "code-wars-capstone.firebaseapp.com",
    projectId: "code-wars-capstone",
    storageBucket: "code-wars-capstone.appspot.com",
    messagingSenderId: "435500261308",
    appId: "1:435500261308:web:99669583edce4ecd89d5b9"
  };


const app = initializeApp(firebaseConfig);

export default app
