import {useContext} from "react";
import {PokemonContext} from "../../../../context/PokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

import s from './style.module.css'

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext)
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    pokemons.map((item) =>
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            isAct={true}
                            className={s.card}
                            minimize={true}
                        />)

                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>

        </div>
    );
};

export default BoardPage;