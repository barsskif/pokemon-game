import PokemonCard from "../../../../../../components/PokemonCard";
import cn from 'classnames';
import s from "./style.module.css";
import {useState} from "react";

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [isSelected, setSelected] = useState(null)

    return (
        <>
            {
                cards.map((item) =>
                    <div className={cn(s.cardBoard, {
                        [s.selected]: isSelected === item.id
                    })}
                         onClick={() => {
                             setSelected(item.id);
                             onClickCard && onClickCard({
                                 ...item,
                                 player
                             })
                         }}
                    >
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            img={item.img}
                            type={item.type}
                            values={item.values}
                            isAct
                            minimize
                        />
                    </div>
                )

            }
        </>
    );


}
export default PlayerBoard;