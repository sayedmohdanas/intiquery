// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC_iN2n3WzlRJq0p5i9KaSi1RfQmEZBiOg",
  authDomain: "intiquery-979f3.firebaseapp.com",
  projectId: "intiquery-979f3",
  storageBucket: "intiquery-979f3.appspot.com",
  messagingSenderId: "534151748849",
  appId: "1:534151748849:web:8ae95e582b9eb16fdbdd50",
  measurementId: "G-H57NKSKP2F"
};

const app = initializeApp(firebaseConfig);
console.log("firebase app", app);
export const auth = getAuth();
