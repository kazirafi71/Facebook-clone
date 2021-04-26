import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCf9G38kjAr1oX1wpEyup_VcZBaJOzvqbQ",
  authDomain: "fb-clone-4c688.firebaseapp.com",
  projectId: "fb-clone-4c688",
  storageBucket: "fb-clone-4c688.appspot.com",
  messagingSenderId: "655706563138",
  appId: "1:655706563138:web:68d65613e74b8ce9f003db",
  measurementId: "G-R05E31ME48",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


var provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider}

export default db
