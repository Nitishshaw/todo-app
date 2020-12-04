// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUYWhZMhlXQIJaH4liG0723H0K0Epd0u8",
  authDomain: "todo-app-cp-eb037.firebaseapp.com",
  databaseURL: "https://todo-app-cp-eb037.firebaseio.com",
  projectId: "todo-app-cp-eb037",
  storageBucket: "todo-app-cp-eb037.appspot.com",
  messagingSenderId: "543564210040",
  appId: "1:543564210040:web:fd77e99012ca3e56fc728d",
  measurementId: "G-ZBDEDSM1PH"
});
 
const db = firebaseApp.firestore();

export default db;