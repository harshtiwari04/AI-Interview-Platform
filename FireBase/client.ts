// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth}  from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClJGCaoR11LXECHzB61buiJzpuUs1xGjQ",
    authDomain: "prepwise-18c3c.firebaseapp.com",
    projectId: "prepwise-18c3c",
    storageBucket: "prepwise-18c3c.firebasestorage.app",
    messagingSenderId: "789945052687",
    appId: "1:789945052687:web:924987971439d5acf83d7a",
    measurementId: "G-XBJE7HNSC6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
