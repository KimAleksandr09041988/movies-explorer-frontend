import React from 'react';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab ';
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
          <NavTab />
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
