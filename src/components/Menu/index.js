import { Link } from 'react-router-dom'

import cn from 'classnames'

import style from './style.module.css'
import React from "react";


const MENU = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "GAME",
    to: "/game"
  },
  {
    title: "ABOUT",
    to: "/about"
  },
  {
    title: "CONTACT",
    to: "/contact"
  },
]


const Menu = ({ isActive, test }) => {

  return (
    <div className={cn(style.menuContainer, { [style.active]: isActive, [style.deactive]: !isActive })}>
      <div className={style.overlay} />
      <div className={style.menuItems}>
        <ul>

          {MENU.map(({ title, to, index }) => (
            <li key={index} onClick={() => test()}>
              <Link to={to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;