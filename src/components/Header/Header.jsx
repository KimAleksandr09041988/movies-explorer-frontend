import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  const width = window.screen.width;
  console.log(width);
    return (
        <header className='header'>
            <Link to='/' className='header__link_logo'>
                <img src={logo} className='header__logo' alt='Логотип' />
            </Link>
            <Navigation />
            <button type='button' className='header__btn-burger'>
              кнопка
              <span className=''></span>
            </button>
        </header>
    )
}

export default Header;  