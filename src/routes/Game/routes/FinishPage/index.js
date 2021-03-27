import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/PokemonContext";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import PokemonCard from "../../../../components/PokemonCard";
import cn from 'classnames'
import style from "../StartPage/style.module.css";




const FinishPage = () =>{
    const fire = useContext(FireBaseContext)
    const {pokemons, pokemonsPlayer2} = useContext(PokemonContext)
    const [statePokemon, setState] = useState({})
    const [isSelected, setSelected] = useState(null)
    const history = useHistory()


const test =(id, i)=>{

    const pokemonPlayer2Card = {
        ...i
    }

    setState(pokemonPlayer2Card)

}


const handleClickButtonEndGame =()=>{
    fire.addPokemon(statePokemon);
    history.replace('/game')
}


    if (Object.keys(pokemonsPlayer2).length === 0){
        history.replace('/game');
    }



    return (


        <div className={style.wrap}>
            <h1>FinishPage</h1>
            <div className={style.flex}>
                {Object.values(pokemons).map((i)=>
                    <PokemonCard
                        className={style.card}
                        key={i.id}
                        name={i.name}
                        id={i.id}
                        img={i.img}
                        type={i.type}
                        values={i.values}
                        isAct={true}

                    />
                )}
            </div>
            <button className={style.btn}
            onClick={()=> handleClickButtonEndGame ()}
                    disabled={Object.keys(statePokemon).length < 1 }
            >Забрать карту</button>
            <div className={style.flex}  >


            {Object.values(pokemonsPlayer2.data).map((i) =>
                <div onClick={() => {
                    test(i.id, i)
                    setSelected(i.id);
                    console.log(isSelected)
                }}>
                <PokemonCard
                className={cn(style.card, {
                    [style.selected]: isSelected === i.id
                })}
                key={i.id}
                name={i.name}
                id={i.id}
                img={i.img}
                type={i.type}
                values={i.values}
                isSelected={i.selected}
                isAct={true}

                />
                </div>
                )}
            </div>
    </div>

    );
}


export default FinishPage;