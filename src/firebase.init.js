// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD23Q4cRLO1lRGsnGEAsfUn4gf-NWRvpsw",
    authDomain: "book-inventory-568ec.firebaseapp.com",
    projectId: "book-inventory-568ec",
    storageBucket: "book-inventory-568ec.appspot.com",
    messagingSenderId: "179915719018",
    appId: "1:179915719018:web:a18409e6ba54c54d17a513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;