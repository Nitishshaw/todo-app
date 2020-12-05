// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOVuZjR9LwkYrUaigS0CfR7BRcDCyzAiY",
  authDomain: "todo-app-2-db810.firebaseapp.com",
  projectId: "todo-app-2-db810",
  storageBucket: "todo-app-2-db810.appspot.com",
  messagingSenderId: "762483421800",
  appId: "1:762483421800:web:75c60b6e6e3cd3acd701dd",
  measurementId: "G-54H7LDT1WX"
});
 
const db = firebaseApp.firestore();

export default db;
