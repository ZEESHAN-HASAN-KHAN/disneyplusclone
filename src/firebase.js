import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAFiBbsFjb33tQdVb2J4mzWl5H5c_BUWeQ",
    authDomain: "disneyplusclone-dc437.firebaseapp.com",
    projectId: "disneyplusclone-dc437",
    storageBucket: "disneyplusclone-dc437.appspot.com",
    messagingSenderId: "1066971003740",
    appId: "1:1066971003740:web:d7a5a31f1ba1f050b85f99",
    measurementId: "G-4YFXYJM81N"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;