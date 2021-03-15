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
            <div className={styles.btn}>
            <p onClick = {hendelClick} >
                Start Game
            </p>
            </div>
           
        </div>
    </header>
    );
}

export default Header;