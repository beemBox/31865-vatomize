import React from 'react'
import LinkButton from '../../atoms/LinkButton/LinkButton'
/**
 ** Componente que contiene el NavBar del layout.
 * @param props Recibe las props que le envíe al renderizar el componente.
 */
export default function NavBar(props) { //TODO probando que funciona export directamente con la definición
  return (
    <>
      <ul>
        <li>
          {/*//! Esto me suena a loop */}
          <LinkButton text="Botón de navbar"/>
        </li>
      </ul>
    </>
  )
}