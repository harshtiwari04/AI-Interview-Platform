// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth}  from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrR8Kswkbf6XIxP99nH8mcSPBzIZhul1Q",
    authDomain: "prepwise-9d410.firebaseapp.com",
    projectId: "prepwise-9d410",
    storageBucket: "prepwise-9d410.firebasestorage.app",
    messagingSenderId: "818323515802",
    appId: "1:818323515802:web:dac4001f074927ddb27223",
    measurementId: "G-XFWFL5T4NX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
