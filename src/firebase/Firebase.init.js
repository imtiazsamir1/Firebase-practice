// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnPDnVk-sbuPLc1JCzgxQs9AxpC1xTvbw",
  authDomain: "fir-auth-198b4.firebaseapp.com",
  projectId: "fir-auth-198b4",
  storageBucket: "fir-auth-198b4.firebasestorage.app",
  messagingSenderId: "331917233335",
  appId: "1:331917233335:web:f5912f78e6b70cd3091132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
