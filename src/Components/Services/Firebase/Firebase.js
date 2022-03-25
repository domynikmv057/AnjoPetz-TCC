// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdAVtst3uI4FJX3iJzX1IdKkYz8yBdzd8",
  authDomain: "anjopetzs.firebaseapp.com",
  projectId: "anjopetzs",
  storageBucket: "anjopetzs.appspot.com",
  messagingSenderId: "321219014493",
  appId: "1:321219014493:web:0a0c7a6e9b60f56be102b4",
  measurementId: "G-80XSKQX287",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

console.log(app);
