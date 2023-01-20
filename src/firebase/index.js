// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZc0zV1-pSVwDCdh-13qlmIrf9rjewimU",
    authDomain: "balart-coder-react.firebaseapp.com",
    projectId: "balart-coder-react",
    storageBucket: "balart-coder-react.appspot.com",
    messagingSenderId: "755610790485",
    appId: "1:755610790485:web:75d3ec56ecd28ea971c2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);