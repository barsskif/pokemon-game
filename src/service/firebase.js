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

 class Firebase{
    constructor() {

        this.fire = firebase;
        this.database = this.fire.database();
    }

     getPokemonSoket = (cb) =>{
         this.database.ref('pokemons').on('value', (snapshot)=>{
             cb(snapshot.val())
         })

     }

     offPokemonSoket = () =>{
         this.database.ref('pokemons').off()

     }

     postPokemon = (key, arrPokemon )=>{
        this.database.ref(`pokemons/${key}`).update({active: arrPokemon})
     }


     addPokemon = (pokemon) =>{
         const newKey = this.database.ref().child('pokemons').push().key;
         this.database.ref('pokemons/' + newKey).set(
            pokemon
         )
     }
}





export default  Firebase;