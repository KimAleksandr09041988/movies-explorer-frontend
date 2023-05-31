import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  const [loggin, setLoggin] = React.useState(false);

  return (
      <header className='header'>
        <div className='container header__container'>
          <Link to='/' className='header__link_logo'>
              <img src={logo} className='header__logo' alt='Логотип' />
          </Link>
          <Navigation />
          {loggin &&
          <button type='button' className='header__btn-burger'>
            кнопка
            <span className=''></span>
          </button>}
        </div>
      </header>
  )
}

export default Header;
