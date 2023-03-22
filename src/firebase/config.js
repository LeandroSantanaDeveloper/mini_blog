import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCswfluYWbSk3LJIu0MuM89asNN6z6Umuo",
    authDomain: "miniblog-a0ac0.firebaseapp.com",
    projectId: "miniblog-a0ac0",
    storageBucket: "miniblog-a0ac0.appspot.com",
    messagingSenderId: "100637190277",
    appId: "1:100637190277:web:f0e7dae6839271225ae1ec"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };