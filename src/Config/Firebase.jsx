import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCshpOUDrjv2ZasRCUWa5bkmbJoiqv8yfA",
  authDomain: "h-m-s-e58c0.firebaseapp.com",
  projectId: "h-m-s-e58c0",
  storageBucket: "h-m-s-e58c0.appspot.com",
  messagingSenderId: "338582966706",
  appId: "1:338582966706:web:f8e02a52683741385254ab"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage}