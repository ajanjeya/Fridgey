import firebase from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBIJ1VM8T0YCqq0ud2K7L_rORlSzFs-69U",
  authDomain: "fridgy-a839f.firebaseapp.com",
  databaseURL: "https://fridgy-a839f.firebaseio.com",
  projectId: "fridgy-a839f",
  messagingSenderId: "969305995939",
  appId: "1:969305995939:web:195f955c4032c479bc5d16"
};

let Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default Firebase
