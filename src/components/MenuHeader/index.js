import { useState } from 'react'


import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader = () => {
    const [stateButtonNavBar, setButtonNavBar] = useState(false)

    const hendelButtonMenu = () => {

        setButtonNavBar(stateButtonNavBar => !stateButtonNavBar)
    }
    return (
        <>
            <NavBar onButtonNavBar={hendelButtonMenu} active={stateButtonNavBar} />
            <Menu active={stateButtonNavBar} />

        </>
    )
}


export default MenuHeader;