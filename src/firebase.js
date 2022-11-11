// IMPORTING FROM FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdmqlaScVgkSxCrvYng7_SzRnE2VQRgU",
  authDomain: "app1-504b3.firebaseapp.com",
  databaseURL: "https://app1-504b3-default-rtdb.firebaseio.com",
  projectId: "app1-504b3",
  storageBucket: "app1-504b3.appspot.com",
  messagingSenderId: "150727407420",
  appId: "1:150727407420:web:de3b1d71b182fd722dd039",
  measurementId: "G-JC5YWN05W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
