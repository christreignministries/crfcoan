// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPBM4XogymnuGgR_mUYH1bHA4iE2CVWc",
  authDomain: "christreign-database.firebaseapp.com",
  databaseURL: "https://christreign-database-default-rtdb.firebaseio.com",
  projectId: "christreign-database",
  storageBucket: "christreign-database.appspot.com",
  messagingSenderId: "789734842219",
  appId: "1:789734842219:web:fad7b045d37cb38d2f362e",
  measurementId: "G-76MJFQB3LF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
