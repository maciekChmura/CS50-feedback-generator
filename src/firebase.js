// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCJXaIUSX3ZiBuYzuGfGBEmV27000v1hOo",
  authDomain: "feedback-generator-21432.firebaseapp.com",
  databaseURL: "https://feedback-generator-21432.firebaseio.com",
  projectId: "feedback-generator-21432",
  storageBucket: "feedback-generator-21432.appspot.com",
  messagingSenderId: "438702146867"
};

firebase.initializeApp(config);

export const database = firebase.database();
