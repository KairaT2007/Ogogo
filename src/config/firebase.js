import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEaWQ4tl4tKA63ZRmE4Fuv4JTpOoq-OZ0",
  authDomain: "alik-8bbcc.firebaseapp.com",
  projectId: "alik-8bbcc",
  storageBucket: "alik-8bbcc.appspot.com",
  messagingSenderId: "616445315512",
  appId: "1:616445315512:web:e1a303f3b1db827236674d",
  measurementId: "G-3GWBT8T71M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
