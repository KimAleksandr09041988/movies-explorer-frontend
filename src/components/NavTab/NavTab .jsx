import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab .css';

const Navigation = () => {
    const [loggin, setLoggin] = React.useState(false);

    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <NavLink className='navigation__link' to={!loggin ? '/signup' : '/movies'}>{!loggin ? 'Регистарация' : "Фильмы"}</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to={!loggin ? '/signin' : '/savemovies'} className={loggin ? 'navigation__link' : 'navigation__link navigation__link_enter'}>{!loggin ? 'Войти' : "Сохранённые фильмы"}</NavLink>
                </li>
                {loggin &&
                  <li className='navigation__item'>
                    <NavLink className='navigation__link navigation__link_profile' to='/profile' style={{ marginLeft: '30px' }}>Аккаунт</NavLink>
                  </li>
                }
            </ul>
        </nav>
    )
}

export default Navigation;
