import { useState } from 'react'


import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader = () => {
    const [stateButtonNavBar, setButtonNavBar] = useState(null)

    const hendelButtonMenu = () => {

        setButtonNavBar(stateButtonNavBar => !stateButtonNavBar)
    }
    return (
        <>
            <NavBar onButtonNavBar={hendelButtonMenu} isActive={stateButtonNavBar} />
            <Menu isActive={stateButtonNavBar} />

        </>
    )
}


export default MenuHeader;