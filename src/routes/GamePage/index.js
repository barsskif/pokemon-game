
import React from "react";
import style from './style.module.css'



const GamePage = ({ onGemePage }) => {

    const handleClickButtonExit = () => {
        onGemePage && onGemePage('app')
    };


    return (
        <>

                <p>GamePage</p>
                <button className={style.test} onClick={handleClickButtonExit}>
                    Exit
        </button>
          
        </>
    )
};


export default GamePage;