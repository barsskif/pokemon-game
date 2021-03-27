import React from 'react';
import cardBackSide from './Img/card-back-side.jpg';
import cn from 'classnames'

import style from './PokemonCard.module.css'


const PokemonCard = ({name, img, id, type, values, test, isAct, className, minimize, isSelected, possession}) => {
    console.log("possession", possession)
    const handelClick = () => {
        test && test(id)
    };

    return (

        <>
            {/*<div className={cn({[style.root]: true}, className)} onClick={({id}) => handelClick(id)}>*/}
                <div className={cn(style.pokemonCard, className,
                    {[style.active]: isAct,
                        [style.selected]: isSelected,
                    })}
                     onClick={({id}) => handelClick(id)}>
                    <div className={style.cardFront} >
                        <div className={cn(style.wrap, style.front)}>
                            <div className={cn(style.pokemon, style[type], style[possession])}>
                                <div className={style.values}>
                                    <div className={cn(style.count, style.top)}>{values.top}</div>
                                    <div className={cn(style.count, style.right)}>{values.right}</div>
                                    <div className={cn(style.count, style.bottom)}>{values.bottom}</div>
                                    <div className={cn(style.count, style.left)}>{values.left}</div>
                                </div>
                                <div className={style.imgContainer}>
                                    <img src={img} alt={name}/>
                                </div>
                                {!minimize && (<div className={style.info}>
                                    <span className={style.number}>#{id}</span>
                                    <h3 className={style.name}>{name}</h3>
                                    <small className={style.type}>Type: <span>{type}</span></small>
                                </div>)}
                            </div>
                        </div>
                    </div>

                    <div className={style.cardBack}>
                        <div className={style.wrap}>
                            <img src={cardBackSide} alt="Сard Backed"/>
                        </div>
                    </div>

                </div>
            {/*</div>*/}
        </>
    )
};

export default PokemonCard;