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
          <LinkButton text="Offers"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Explore vapes"/>
        </li>
        <li>|</li>
        <li>
          <LinkButton text="Trendy"/>
        </li>
        <li>|</li>
        <li><CartWidget className="cart-widget__icon" /></li>
      </ul>
    </div>

}

export default NavBar