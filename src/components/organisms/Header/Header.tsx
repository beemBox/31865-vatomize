import React from 'react'
import NavBar from '../NavBar/NavBar'
import Logo from '../../atoms/Logo/Logo'
import './Header.css'
/**
 ** Header del layout
 *! Puede que no deje el NavBar dentro del header. Depende de cómo lo vaya implementando avance.
 * @param props 
 * @returns 
 */
const Header = (props: {user: {}}): JSX.Element => {
  const {user} = props

  //TODO Probar el uso de fragment para no tener que agregar un wrapper innecesario.
  //? Funcionalidad disponible a partir de la v16.2. Fuente: https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
  return (
    <div className="header">
      <Logo className='header__logo logo' />
      <NavBar className='header__menu' />
    </div>
  )
}

export default Header