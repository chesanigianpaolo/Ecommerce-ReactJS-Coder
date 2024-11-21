import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCasF1sljrUIKUlDaYF5f_tF_vI9SbF_Ms",
  authDomain: "backend-final-react.firebaseapp.com",
  projectId: "backend-final-react",
  storageBucket: "backend-final-react.firebasestorage.app",
  messagingSenderId: "672564024060",
  appId: "1:672564024060:web:6254ca88c6589d0bf53d79"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);