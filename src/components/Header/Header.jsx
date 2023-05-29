import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './components/Burger/Burger';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__link_logo'>
                <img src={logo} className='header__logo' alt='Логотип' />
            </Link>
            <Burger />
        </header>
    )
}

export default Header;  