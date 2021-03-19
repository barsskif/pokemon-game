import firebase from "firebase/app";
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyBquMiavvkOMGlGorlvbtRRnU7VGhgo9P8",
    authDomain: "pokemon-games-10f86.firebaseapp.com",
    databaseURL: "https://pokemon-games-10f86-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pokemon-games-10f86",
    storageBucket: "pokemon-games-10f86.appspot.com",
    messagingSenderId: "1004273437679",
    appId: "1:1004273437679:web:a1ed4136ca7510e193041a"
});

export const fire = firebase;
export const database = fire.database();


export default  database;