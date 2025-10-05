    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5KkJtVOGRzFerLKFRw5poOadNrqxXHN8",
  authDomain: "learning-afeac.firebaseapp.com",
  databaseURL: "https://learning-afeac-default-rtdb.firebaseio.com",
  projectId: "learning-afeac",
  storageBucket: "learning-afeac.firebasestorage.app",
  messagingSenderId: "11774523837",
  appId: "1:11774523837:web:0747b117067f484d03fad4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)