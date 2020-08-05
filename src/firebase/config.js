import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsDeyUzwbIO5beb0tRwAygzVCEfE2LC1Q",
  authDomain: "picshare-f92cd.firebaseapp.com",
  databaseURL: "https://picshare-f92cd.firebaseio.com",
  projectId: "picshare-f92cd",
  storageBucket: "picshare-f92cd.appspot.com",
  messagingSenderId: "555229151675",
  appId: "1:555229151675:web:edfa11e2bb3f78ddda049e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore, projectStorage, timestamp };

