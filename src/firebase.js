import firebase from 'firebase/app';
import firestore from 'firebase/firestore'
import 'firebase/auth';

const settings = { timestampsInSnapshots: true };


var config = {
    apiKey: "AIzaSyCH0XIgdFbS3tqq8pWScw-S3B0oRdIr8Ow",
    authDomain: "harrys-cocktails.firebaseapp.com",
    projectId: "harrys-cocktails",
    storageBucket: "harrys-cocktails.appspot.com",
    messagingSenderId: "676253050578",
    appId: "1:676253050578:web:fb58bdbcc912d206a5ef0b"

};
// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export const auth = firebase.auth();

export default firebase;