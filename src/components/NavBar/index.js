import cn from 'classnames'


import style from './style.module.css'

const NavBar = ({ onButtonNavBar, active }) => {

    const hendelClickExit = () => {
        onButtonNavBar()
    }
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.navWrapper}>
                    <p className={style.brand}>
                        LOGO
    </p>
                    <p className={cn(style.menuButton, { [style.active]: active })}
                        onClick={hendelClickExit}>
                        <span />
                    </p>
                </div>
            </nav>
        </>
    )
}


export default NavBar;