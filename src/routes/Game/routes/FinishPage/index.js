import {useContext} from 'react'
import {PokemonContext} from "../../../../context/PokemonContext";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import PlayerBoard from "../BoardPage/component/PlayerBoard";
import PokemonCard from "../../../../components/PokemonCard";
import style from "../StartPage/style.module.css";



const FinishPage = ({pok}) =>{
    const fire = useContext(FireBaseContext)
    const {pokemons} = useContext(PokemonContext)
    console.log('pokemonContext', pokemons)
    console.log('fire', fire)
    console.log('pok', pok)

const test =(id, i)=>{
    console.log("test", id)
    console.log("test", i)
    fire.addPokemon(i)
}


    return (
        <>
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
                        isSelected={i.selected}
                        isAct={true}

                    />
                )}
            </div>
            <button style={{width: '30%',height:"30px", marginTop:"20px",
                marginBottom:"20px",
               position:"relative",
                left:"50%",
                transform:"translate(-50%,0)"
            }}>Забрать карту</button>
            <div className={style.flex} >


            {pok.map((i) =>
                <PokemonCard
                className={style.card}
                key={i.id}
                name={i.name}
                id={i.id}
                img={i.img}
                type={i.type}
                values={i.values}
                isSelected={i.selected}
                isAct={true}

                />

                )}
            </div>
    </>

    );
}


export default FinishPage;