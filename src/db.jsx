// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1R659FCB875ITNVj4tKo5I4q5Defa7Nc",
  authDomain: "sadaqa-29673.firebaseapp.com",
  projectId: "sadaqa-29673",
  storageBucket: "sadaqa-29673.appspot.com",
  messagingSenderId: "617755946669",
  appId: "1:617755946669:web:a5c653e93e99537b19a024",
  measurementId: "G-6E40CRYCGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;