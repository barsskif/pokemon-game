import React from 'react';

import styles from './Header.module.css'


const Header = ({onClickButton}) =>{

    const hendelClick = () =>{
        onClickButton && onClickButton('game')
    }
    
    return (
        <header className={styles.root}>
        <div className={styles.forest}></div>
        <div className={styles.container}>
            <h1>This is title</h1>
            <p>This is Description!</p>
            <button onClick = {hendelClick} >
                Start Game
            </button>
        </div>
    </header>
    );
}

export default Header;