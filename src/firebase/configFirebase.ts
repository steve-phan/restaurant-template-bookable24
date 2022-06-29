// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCCLBY-auBrtosq7uCNCzp6uy466stpLq4',
  authDomain: 'shoponline-eu.firebaseapp.com',
  projectId: 'shoponline-eu',
  storageBucket: 'shoponline-eu.appspot.com',
  messagingSenderId: '814240023185',
  appId: '1:814240023185:web:1883c5a3ae68b18bd47530',
  measurementId: 'G-J71GHWSL2Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
