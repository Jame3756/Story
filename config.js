import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyC2YVgSR6FCgMuXdqepfefvc9hz9YVOK7g",
  authDomain: "liber-e6196.firebaseapp.com",
  projectId: "liber-e6196",
  storageBucket: "liber-e6196.appspot.com",
  messagingSenderId: "655903845730",
  appId: "1:655903845730:web:7ae2ea979b8eae016fd03b"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()