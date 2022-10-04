import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCnjwQYCghMKeUeyxrpRD57kvx-lihaAgk",
    authDomain: "shopc-a5f1f.firebaseapp.com",
    projectId: "shopc-a5f1f",
    storageBucket: "shopc-a5f1f.appspot.com",
    messagingSenderId: "477661401581",
    appId: "1:477661401581:web:f11ed6b5d7f337762257e4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)