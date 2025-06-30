
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDukPY6FYVCfGmHtcOwsXF4hmU8SDiib08",
  authDomain: "e-commerce-1-d6e8b.firebaseapp.com",
  projectId: "e-commerce-1-d6e8b",
  storageBucket: "e-commerce-1-d6e8b.firebasestorage.app",
  messagingSenderId: "255350428242",
  appId: "1:255350428242:web:718b5725557792f2bd858b",
  measurementId: "G-3SME2YT724"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const db=getFirestore(app);



