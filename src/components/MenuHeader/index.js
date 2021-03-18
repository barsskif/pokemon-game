import React, { useState } from 'react'


import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader = ({ bgActive }) => {
    const [stateButtonNavBar, setButtonNavBar] = useState(null);

    const handleButtonMenu = () => {
        setButtonNavBar(stateButtonNavBar => !stateButtonNavBar)
        // setButtonNavBar(null)
    };

    return (
        <>
            <NavBar onButtonNavBar={handleButtonMenu} isActive={stateButtonNavBar} bgActiveN={bgActive} />
            <Menu isActive={stateButtonNavBar} handleButton={handleButtonMenu} />

        </>
    )
};


export default MenuHeader;