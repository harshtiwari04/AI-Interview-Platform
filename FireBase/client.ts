// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth}  from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGSXzpJzkUkXj4MhDT3CZnqgdzVu1lkTc",
    authDomain: "prepwise-40501.firebaseapp.com",
    projectId: "prepwise-40501",
    storageBucket: "prepwise-40501.firebasestorage.app",
    messagingSenderId: "300807157120",
    appId: "1:300807157120:web:432edb4e39a5fae8e3bd65",
    measurementId: "G-K7ZGZGVSNK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
