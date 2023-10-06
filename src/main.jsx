import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMNOvM3xFPgmBhasfGIvwNvasnqXo_1ms",
  authDomain: "e-commerce-react-30791.firebaseapp.com",
  projectId: "e-commerce-react-30791",
  storageBucket: "e-commerce-react-30791.appspot.com",
  messagingSenderId: "628681934662",
  appId: "1:628681934662:web:d948cc8ad518f8e259c747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
