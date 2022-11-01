import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAvmuazK8Slyd9XM4qstRd8vTqZX_dpJFI",
    authDomain: "sho-pc.firebaseapp.com",
    projectId: "sho-pc",
    storageBucket: "sho-pc.appspot.com",
    messagingSenderId: "979475084167",
    appId: "1:979475084167:web:b588b9236337a8c4685922",
    measurementId: "G-1FS6QPWZRS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)