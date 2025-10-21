// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEmQG_lu-En-hG7OKO8LjemyXZNie2lhk",
  authDomain: "pwa-gastos-web.firebaseapp.com",
  projectId: "pwa-gastos-web",
  storageBucket: "pwa-gastos-web.firebasestorage.app",
  messagingSenderId: "595472855825",
  appId: "1:595472855825:web:dfa03ba25aec8d16a852b0",
  measurementId: "G-MJ6ETXQT3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
