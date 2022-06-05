import React from 'react'
import LinkButton from '../LinkButton/LinkButton'
import CartWidget from '../CartWidget/CartWidget'
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
          <LinkButton text="Juices"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Vapes"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Mods"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Tanks"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Accesories"/>
        </li>
        <li>|</li>
        <li><CartWidget className="cart-widget__icon" /></li>
      </ul>
    </div>

}

export default NavBar