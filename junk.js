// firebase project name
// minilms
// webapp name
//mini-lms

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdZWeVkve65avajC5mxtYsVlhILLNCpE",
  authDomain: "new-lms-ffd34.firebaseapp.com",
  projectId: "new-lms-ffd34",
  storageBucket: "new-lms-ffd34.appspot.com",
  messagingSenderId: "236410350024",
  appId: "1:236410350024:web:0cbefc733b1e055c73b8fd",
  measurementId: "G-HT4EG8BYKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
