import React from "react";

import Pikahu from '../../static/pika.png';
import style from './style.module.css'


const NotFound = () => {
    return (
        <div className={style.wrap}>
            <h1>404 NotFound</h1>
            <img src={Pikahu} alt='Pikahu'/>
        </div>

    );
};


export default NotFound;