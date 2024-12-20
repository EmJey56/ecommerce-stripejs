// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBy8fpFXZXdwMjOFMvqS71BXTYqGLU1mP8",
  authDomain: "sampl-4d84c.firebaseapp.com",
  databaseURL: "https://sampl-4d84c-default-rtdb.firebaseio.com",
  projectId: "sampl-4d84c",
  storageBucket: "sampl-4d84c.appspot.com",
  messagingSenderId: "359208522463",
  appId: "1:359208522463:web:8369bfcb66bdd9c67dcf6a",
  measurementId: "G-S0TKSCWZXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
