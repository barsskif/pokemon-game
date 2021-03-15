import {useState} from 'react'


import Menu from '../Menu'
import NavBar from '../NavBar'

const MenuHeader = () =>{
    const [stateButtonNavBar, setButtonNavBar] = useState(false)

    const hendelButtonMenu = () => {

setButtonNavBar(stateButtonNavBar => !stateButtonNavBar)
    }
    return (
<>
<NavBar onButtonNavBar = {hendelButtonMenu} activeM = {stateButtonNavBar}/>
<Menu activeM = {stateButtonNavBar} />

</>
    )
}


export default MenuHeader;