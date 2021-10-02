// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator  } from "firebase/auth";
import "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
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
  appId: "1:145820301567:web:ade3df65ff24987b46b4ca",
  measurementId: "G-07NH5C84XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, 'localhost', 8080);

export { app, analytics, auth, db };