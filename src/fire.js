import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJsJ3ylPwvbmtYQsH2mxE1L5sKucbHjJg",
  authDomain: "epicgames-6d918.firebaseapp.com",
  projectId: "epicgames-6d918",
  storageBucket: "epicgames-6d918.appspot.com",
  messagingSenderId: "242234131371",
  appId: "1:242234131371:web:b43b3f49f40415ce86c8ee",
  measurementId: "G-Z9MRHWNW9E",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
