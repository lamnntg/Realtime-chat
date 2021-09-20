// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2iyhHHrsE0aRfLeWxeR353x7IxvGNtqk",
  authDomain: "fir-sample-54b76.firebaseapp.com",
  projectId: "fir-sample-54b76",
  storageBucket: "fir-sample-54b76.appspot.com",
  messagingSenderId: "145820301567",
  appId: "1:145820301567:web:d16d44d417b75e3146b4ca",
  measurementId: "G-D0HNBREH78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);