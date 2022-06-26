import NavBar from '../NavBar/NavBar'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className='header__logo logo' />
      </Link>
      <div className="header__menu-container">
        <NavBar className='header__menu' />
      </div>
    </div>
  )
}

export default Header