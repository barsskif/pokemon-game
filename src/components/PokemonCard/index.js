import React from 'react';
import cardBackSide from './Img/card-back-side.jpg';
import cn from 'classnames'

import style from './PokemonCard.module.css'



const PokemonCard = ({name, img, id, type, values, test, isAct}) => {

    const handelClick = () => {
        test(id)
    };

    return (

        <>
            <div className={style.root} onClick={({id}) => handelClick(id)}>
                <div className={cn(style.pokemonCard, {[style.active]: isAct})}>
                    <div className={style.cardFront}>
                        <div className={cn(style.wrap, style.front)}>
                            <div className={cn(style.pokemon, style[type])}>
                                <div className={style.values}>
                                    <div className={cn(style.count, style.top)}>{values.top}</div>
                                    <div className={cn(style.count, style.right)}>{values.right}</div>
                                    <div className={cn(style.count, style.bottom)}>{values.bottom}</div>
                                    <div className={cn(style.count, style.left)}>{values.left}</div>
                                </div>
                                <div className={style.imgContainer}>
                                    <img src={img} alt={name}/>
                                </div>
                                <div className={style.info}>
                                    <span className={style.number}>#{id}</span>
                                    <h3 className={style.name}>{name}</h3>
                                    <small className={style.type}>Type: <span>{type}</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.cardBack}>
                        <div className={style.wrap}>
                            <img src={cardBackSide} alt="Сard Backed"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default PokemonCard;