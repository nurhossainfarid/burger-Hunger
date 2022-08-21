// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEWCp0kRyKMmwRAkngeEAkyMe5HjzBB0",
  authDomain: "burger-hunger47.firebaseapp.com",
  projectId: "burger-hunger47",
  storageBucket: "burger-hunger47.appspot.com",
  messagingSenderId: "491010642375",
  appId: "1:491010642375:web:d8aee6960b85c3c56749e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;