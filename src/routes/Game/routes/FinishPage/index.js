import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/PokemonContext";
import {FireBaseContext} from "../../../../context/FirebaseContext";
import PlayerBoard from "../BoardPage/component/PlayerBoard";
import PokemonCard from "../../../../components/PokemonCard";
import style from "../StartPage/style.module.css";



const FinishPage = ({pok, ts}) =>{
    const fire = useContext(FireBaseContext)
    const {pokemons} = useContext(PokemonContext)
    const [st, setState] = useState({})
    const [sel, setSel] = useState(true)
    const history = useHistory()

    console.log('pokemonContext', pokemons)
    console.log('fire', fire)
    console.log('pok', pok)
    // console.log("add", Object.keys(st).length)

const test =(id, i)=>{
    console.log("test", id)
    console.log("test", i)
    const ci = {
        ...i
    }

    // fire.addPokemon(i)
    setState(ci)
    console.log("add", ci)

}

const butn =()=>{
    fire.addPokemon(st);
    history.replace('/game')
}
    // console.log('ci', st)
    console.log("st", Object.keys(st).length)

    if (ts === false) {
        history.replace('/game/board');
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
            }}
            onClick={()=> butn()}
            >Забрать карту</button>
            <div className={style.flex}  >


            {pok.map((i) =>
                <div onClick={() => test(i.id, i)}>
                <PokemonCard
                className={style.card}
                key={i.id}
                select ={sel}
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
    </>

    );
}


export default FinishPage;