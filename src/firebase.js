// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXwTibHhP4N-UjvSvtTg6f3LdVidcHuXY",
  authDomain: "itms-2022.firebaseapp.com",
  projectId: "itms-2022",
  storageBucket: "itms-2022.appspot.com",
  messagingSenderId: "226207216522",
  appId: "1:226207216522:web:3f7259b074a17440dfce73",
  measurementId: "G-1R8GF2NDJL"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };

//const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);