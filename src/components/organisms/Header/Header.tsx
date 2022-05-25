import React from 'react'
import NavBar from '../../molecules/NavBar/NavBar'
/**
 ** Header del layout
 *! Puede que no deje el NavBar dentro del header. Depende de cómo lo vaya implementando avance.
 * @param props 
 * @returns 
 */
function Header(props: object): JSX.Element {
  //TODO Probar el uso de fragment para no tener que agregar un wrapper innecesario.
  //? Funcionalidad disponible a partir de la v16.2. Fuente: https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
  return (
    <>
      <NavBar />
    </>
  )
}

export default Header