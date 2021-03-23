import style from "../../../GamePage/style.module.css";
import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/PokemonContext";
import {useHistory} from "react-router-dom";

const StartPage = () => {
    const [arrPokemon, setArr] = useState(null);
    let history = useHistory();
    const firebase = useContext(FireBaseContext);
    const {pokemons, setPokemons} = useContext(PokemonContext);

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setArr(prev => pokemons)
        })
    }, []);

    const handleClickButtonStartGame = () => {
        history.push('/game/board')
    };

    const handleClickActiveCard = (key,) => {
        return setPokemons([...pokemons, {...arrPokemon[key]}]);

    };

    if (arrPokemon === null) {
        return <h1>Lading....</h1>
    };
    return (
        <>
            <div>
                <div className={style.flex}>
                    <h1>GamePage</h1>
                </div>

                <button className={style.btn} onClick={handleClickButtonStartGame}>
                    Start Game
                </button>
            </div>


            <div className={style.flex}>
                {
                    Object.entries(arrPokemon).map(([key, {id, name, img, type, values, active = true}]) =>
                        <PokemonCard
                            key={key}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            test={() => handleClickActiveCard(key, id)}
                            isAct={active}


                        />)

                }

            </div>

        </>
    );
}

export default StartPage;