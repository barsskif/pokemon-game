import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import style from './style.module.css'
import PokemonItems from '../../PokemonItems.json'
import PokemonCard from "../../components/PokemonCard";


const GamePage = () => {
    const [arr, setArr] = useState(PokemonItems);
    const history = useHistory();

    const handleClickButtonExit = () => {
        history.push('/')
    };

    const handleClickActiveCard = (id) => {
        // const newArr = [...arr];
        // arr.forEach(i => {
        //     if (i.id === id) {
        //         i.active = true;
        //     }
        // });
        // setArr(newArr);
        setArr(arr => arr.filter(i => {
            if (i.id === id) {
                i.active = true;
            }
            return true;
        }))
    };


    return (
        <>


            <div>
                <div className={style.flex}>
                    <h1>GamePage</h1>
                </div>

                <button className={style.btn} onClick={handleClickButtonExit}>
                    Exit
                </button>
            </div>


            <div className={style.flex}>
                {
                    arr.map((item) =>
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            test={handleClickActiveCard}
                            isAct={item.active}
                        />)
                }
            </div>
        </>
    )
};


export default GamePage;