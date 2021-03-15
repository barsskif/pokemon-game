import style from './style.module.css'

const NavBar = ({onButtonNavBar, activeM}) => {

    const hendelClickExit = () =>{
        onButtonNavBar()
    }
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.navWrapper}>
                    <p className={style.brand}>
                        LOGO
    </p>
                    <a className={`${style.menuButton} ${activeM ? style.active : " "}` } onClick = {hendelClickExit}>
                        <span />
                    </a>
                </div>
            </nav>
        </>
    )
}


export default NavBar;