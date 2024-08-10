// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-8eb36.firebaseapp.com",
  projectId: "mern-blog-app-8eb36",
  storageBucket: "mern-blog-app-8eb36.appspot.com",
  messagingSenderId: "339301305704",
  appId: "1:339301305704:web:b9a853150b81bde1789add",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
