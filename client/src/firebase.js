// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "",
  authDomain: "intiquery2.firebaseapp.com",
  projectId: "intiquery2",
  storageBucket: "intiquery2.appspot.com",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
console.log("firebase app", app);
export const auth = getAuth();
