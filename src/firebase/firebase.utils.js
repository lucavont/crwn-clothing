import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLLwzafbDSi1gQMU9l3Fpg9ra127B39l8",
  authDomain: "crwn-db-bba85.firebaseapp.com",
  projectId: "crwn-db-bba85",
  storageBucket: "crwn-db-bba85.appspot.com",
  messagingSenderId: "655855749436",
  appId: "1:655855749436:web:22ebfacc9e20ef880bf639",
  measurementId: "G-6Q24DL9X1S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
