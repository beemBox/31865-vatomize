import React from 'react'
import LinkButton from '../../atoms/LinkButton/LinkButton'
/**
 ** Componente que contiene el NavBar del layout.
 * @param props Recibe las props que le envíe al renderizar el componente.
 */
//export default function NavBar(props: any) { //TODO probando que funciona export directamente con la definición
const NavBar = ({className}) =>{
  return (
    <div className={className}>
      <ul>
        <li>
          {/*//! Esto me suena a loop */}
          <LinkButton text="Botón de navbar"/>
        </li>
      </ul>
    </div>
  )
}

export default NavBar