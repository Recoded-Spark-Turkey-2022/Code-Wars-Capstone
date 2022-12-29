// import firebase from 'firebase/compat/app';
// import "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyB-lIwSHr8JegZMANEQv05TnJklZfSNBHc",
//   authDomain: "code-wars-capstone.firebaseapp.com",
//   projectId: "code-wars-capstone",
//   storageBucket: "code-wars-capstone.appspot.com",
//   messagingSenderId: "435500261308",
//   appId: "1:435500261308:web:99669583edce4ecd89d5b9"
// };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();


// export default db;





import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB-lIwSHr8JegZMANEQv05TnJklZfSNBHc",
  authDomain: "code-wars-capstone.firebaseapp.com",
  projectId: "code-wars-capstone",
  storageBucket: "code-wars-capstone.appspot.com",
  messagingSenderId: "435500261308",
  appId: "1:435500261308:web:99669583edce4ecd89d5b9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;