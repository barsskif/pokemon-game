import {useState, useEffect} from "react";
import style from './style.module.css'
import PokemonCard from "../../components/PokemonCard";
import database from "../../service/firebase";

const GamePage = () => {
    const [arrPokemon, setArr] = useState(null);

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
            setArr(snapshot.val());
        })
    }, [])

    const handleClickButtonAddNewCard = () => {
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(
            {
                "abilities": [
                    "keen-eye",
                    "tangled-feet",
                    "big-pecks"
                ],
                "base_experience": 122,
                "height": 11,
                "weight": 300,
                "id": 17,
                "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
                "name": "pidgeotto",
                "stats": {
                    "hp": 63,
                    "attack": 60,
                    "defense": 55,
                    "special-attack": 50,
                    "special-defense": 50,
                    "speed": 71
                },
                "type": "normal",
                "values": {
                    "top": 7,
                    "right": 5,
                    "bottom": 1,
                    "left": 2
                }
            }
        )
    };

    const handleClickActiveCard = (key) => {
        // setArr(prevState => {
        //     return Object.entries(prevState).reduce((act, item) => {
        //         const pokemon = {...item[1]};
        //         if (pokemon.id === id) {
        //             pokemon.active = true;
        //         };
        //
        //         acc[item[0]] = pokemon;
        //         return act;
        //     }, {});
        // });
        database.ref('pokemons/' + key).update(
            {active: !arrPokemon[key].active}
        )

    };

    if (arrPokemon === null) {
        return <h1>Загрузка....</h1>
    }

    return (
        <>


            <div>
                <div className={style.flex}>
                    <h1>GamePage</h1>
                </div>

                <button className={style.btn} onClick={handleClickButtonAddNewCard}>
                    Add new Pokemon
                </button>
            </div>


            <div className={style.flex}>
                {
                    Object.entries(arrPokemon).map(([key, {id, name, img, type, values, active}]) =>
                        <PokemonCard
                            key={key}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            test={() => handleClickActiveCard(key)}
                            isAct={active}

                        />)

                }

            </div>
        </>
    )
};


export default GamePage;