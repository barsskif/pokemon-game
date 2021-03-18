import cn from 'classnames'


import style from './style.module.css'
import React from "react";

const NavBar = ({onButtonNavBar, isActive, bgActiveN}) => {

    const handelClickExit = () => {
        onButtonNavBar()

    };

    return (
        <>
            <nav className={cn(style.navbar, {[style.bgActive]: bgActiveN})}>
                <div className={style.navWrapper}>
                    <p className={style.brand}>
                        LOGO
                    </p>
                    <p className={cn(style.menuButton, {[style.active]: isActive})}
                       onClick={handelClickExit}>
                        <span/>
                    </p>
                </div>
            </nav>
        </>
    )
};


export default NavBar;