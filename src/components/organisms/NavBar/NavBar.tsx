import React from 'react'
import LinkButton from '../../atoms/LinkButton/LinkButton'
import CartWidget from '../../atoms/CartWidget/CartWidget'
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
          <LinkButton text="Sign In"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Sign up"/>
        </li>
        <li>|</li>
        <li><CartWidget className="cart-widget__icon" /></li>
      </ul>
    </div>

}

export default NavBar