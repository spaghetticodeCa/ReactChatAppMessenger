import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuGbEjFUnR2qUz6jR2oe3rWxfpXD3r_xs",
  authDomain: "firechat-7dda5.firebaseapp.com",
  projectId: "firechat-7dda5",
  storageBucket: "firechat-7dda5.appspot.com",
  messagingSenderId: "1009801366850",
  appId: "1:1009801366850:web:a7da151eb951737c80ccdb",
  measurementId: "G-R5X6D0VF3C",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, db, provider };
