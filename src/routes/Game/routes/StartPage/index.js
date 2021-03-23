// import style from "../../../GamePage/style.module.css";
import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/PokemonContext";
import {useHistory} from "react-router-dom";

import style from './style.module.css';

const StartPage = () => {
    const [arrPokemon, setArr] = useState(null);
    let history = useHistory();
    const firebase = useContext(FireBaseContext);
    const {pokemons, setPokemons} = useContext(PokemonContext);

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setArr(prev => pokemons)
        });
        return () => firebase.offPokemonSoket()
    }, []);

    const handleClickButtonStartGame = () => {
        history.push('/game/board')
    };

    const handleClickSelect = (key,) => {
        setPokemons(prevState => {
            if (prevState[key]){
                const copyState ={...prevState};
                delete copyState[key]

                return copyState
            }

            return {
                ...prevState,
                [key]: arrPokemon[key]
            }
        })
        setArr(prevState => ({
            ...prevState,
            [key]:{
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))


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

                <button className={style.btn}
                        onClick={handleClickButtonStartGame}
                disabled={Object.keys(pokemons).length < 5}
                >
                    Start Game
                </button>
            </div>


            <div className={style.flex}>
                {
                    Object.entries(arrPokemon).map(([key, {id, name, img, type, values, selected}]) =>
                        <PokemonCard
                            className={style.card}
                            key={key}
                            name={name}
                            id={id}
                            img={img}
                            type={type}
                            values={values}
                            isSelected={selected}
                            test={() => {
                                if (Object.keys(pokemons).length < 5 || selected){
                                    handleClickSelect(key)
                                }

                            }}
                            isAct={true}


                        />)

                }

            </div>

        </>
    );
}

export default StartPage;