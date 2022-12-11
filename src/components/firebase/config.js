// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59hEgSltUJ3cGJTApsjjmfcsx2K1qi-o",
  authDomain: "cmsp-b820d.firebaseapp.com",
  projectId: "cmsp-b820d",
  storageBucket: "cmsp-b820d.appspot.com",
  messagingSenderId: "1059264296937",
  appId: "1:1059264296937:web:bb929adcb3622e308afd78",
  measurementId: "G-N0VLMLFWDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);