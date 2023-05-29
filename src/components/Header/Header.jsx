import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'

const Header = () => {
    const [loggin, setLoggin] = React.useState(true);

    return (
        <header className='header'>
            <Link className='header__link_logo'>
                <img src={logo} className='header__logo' alt='Логотип' />
            </Link>
            {loggin ? 
                <nav className='nav'>
                    <NavLink to='/' className='header__link'>Фильмы</NavLink>
                    <NavLink to='/' className='header__link'>Сохранённые фильмы</NavLink>
                    <NavLink to='/' className='header__link'>Аккаунт</NavLink>
                </nav> : 
                <nav className='nav'>
                    <NavLink to='/' className='header__link'>Регистрация</NavLink>
                    <NavLink to='/' className='header__link'>Войти</NavLink>
                </nav>
            }
        </header>
    )
}

export default Header;  