import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG3uBKZPgq8KCcq3Oqwgwjex8mSmlS7-g",
  authDomain: "react-todo-app-9e5bb.firebaseapp.com",
  projectId: "react-todo-app-9e5bb",
  storageBucket: "react-todo-app-9e5bb.appspot.com",
  messagingSenderId: "142283087501",
  appId: "1:142283087501:web:2c492a7fe4db827e070cc4",
  measurementId: "G-TCZQGT8L6K",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
console.log(db);
export default db;
