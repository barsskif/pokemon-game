import React from 'react';
import {useHistory} from 'react-router-dom'

import alarm from "../../static/alar.mp3";

import styles from './Header.module.css'


const Header = ({title, descr}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
        new Audio(alarm).play();
    };


    return (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.silhouette}></div>
            <div className={styles.moon}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p style={{textAlign: 'center'}}>{descr}</p>
                <div className={styles.btn}>
                    <p onClick={handleClick}>
                        Start Game

                    </p>
                </div>

            </div>
        </header>
    );
};

export default Header;