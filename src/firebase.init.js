// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRJ0wOqvtB3dDt0w1D36AYIZo-kRgPQe8",
  authDomain: "computer-warehouse-5a411.firebaseapp.com",
  projectId: "computer-warehouse-5a411",
  storageBucket: "computer-warehouse-5a411.appspot.com",
  messagingSenderId: "949583365887",
  appId: "1:949583365887:web:b47b79cdc6d6415cbb2eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;