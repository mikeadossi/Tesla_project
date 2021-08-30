import { initializeApp } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDED_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    console.log("message", error.message);
    console.log("code", error.code);
  });
};

export const logInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOutOfApp = () => {
  signOut(auth)
    .then((res) => {
      console.log("signed out");
    })
    .catch((error) => {
      console.log("signout error", error);
    });
};

// sendPasswordResetEmail(auth, email)

export default app;
