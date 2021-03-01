import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdGSh3AX1ZIlSLsIWowO4lNIa9CJMCQ08",
  authDomain: "cncm-website.firebaseapp.com",
  databaseURL: "https://cncm-website.firebaseio.com",
  projectId: "cncm-website",
  storageBucket: "cncm-website.appspot.com",
  messagingSenderId: "405298212702",
  appId: "1:405298212702:web:12f84c73f1c9f895",
  measurementId: "G-S50LLXSZNS",
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.database();
