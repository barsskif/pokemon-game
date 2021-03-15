import style from './style.module.css'



const Menu = ({activeM}) => {
    return (
        <div className={`${style.menuContainer} ${activeM ? style.active  : style.deactive }`}>
            {/* className={`${style.menuButton} ${activeM ? style.active : " "}` } */}
        <div className={style.overlay} />
        <div className={style.menuItems}>
          <ul>
            <li>
              <a href="#welcome">
                HOME
              </a>
            </li>
            <li>
              <a href="#game">
                GAME
              </a>
            </li>
            <li>
              <a href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        </div>
    );
}

export default Menu;