import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZe3eOe8F1D8spfjo4ceHF6v-lKOVe7Zo",
  authDomain: "whatsapp-clone-66b78.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-66b78.firebaseio.com",
  projectId: "whatsapp-clone-66b78",
  storageBucket: "whatsapp-clone-66b78.appspot.com",
  messagingSenderId: "173346951124",
  appId: "1:173346951124:web:24adc06f18466a764dd041",
  measurementId: "G-GCK4GJMMF2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
