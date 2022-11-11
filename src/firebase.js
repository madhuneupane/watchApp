// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDfg85yR0oSB-g6C-t_U4VWSbTafB0X3Lo",
//   authDomain: "test-6a30f.firebaseapp.com",
//   projectId: "test-6a30f",
//   storageBucket: "test-6a30f.appspot.com",
//   messagingSenderId: "54325834329",
//   appId: "1:54325834329:web:af78d33075ae3861297748",
//   measurementId: "G-82D9NTK341",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const db = getFirestore(app);

// export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Marina
import "firebase/auth";
import "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);

// Marina
// const auth = getAuth(app);

export { db };

// Marina
// export { auth };