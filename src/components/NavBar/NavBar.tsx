import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
/**
 ** Componente que contiene el NavBar del layout.
 * @param props Recibe las props que le envíe al renderizar el componente.
 */
//export default function NavBar(props: any) { //TODO probando que funciona export directamente con la definición
const NavBar = ({className}: {className: string}) =>{
  return <div className={className}>
      <ul>
        <li>
          {/*//! Esto me suena a loop */}
          {/*//todo TOMAR LOS TEXTOS DE BTNS DE web.config.js  */}
          <NavLink to='/category/juice'>
            <LinkButton text="Juices"/>
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to='/category/vape'>
            <LinkButton text="Vapes"/>
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to='/category/mod'>
            <LinkButton text="Mods"/>
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to='/category/tank'>
            <LinkButton text="Tanks"/>
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to='/category/accesory'>
            <LinkButton text="Accesories"/>
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to='/cart'>
            <CartWidget className="cart-widget__icon" />
          </NavLink>
        </li>
      </ul>
    </div>

}

export default NavBar