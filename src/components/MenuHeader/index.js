import React, {useState} from 'react'


import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader = ({bgActive}) => {
    const [stateButtonNavBar, setButtonNavBar] = useState(null);

    const handelButtonMenu = () => {
        setButtonNavBar(stateButtonNavBar => !stateButtonNavBar)
    };

    return (
        <>
            <NavBar onButtonNavBar={handelButtonMenu} isActive={stateButtonNavBar} bgActiveN={bgActive}/>
            <Menu isActive={stateButtonNavBar} handelButton={handelButtonMenu}/>

        </>
    )
};


export default MenuHeader;