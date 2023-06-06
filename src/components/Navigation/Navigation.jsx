import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [loggin, setLoggin] = React.useState(true);
  return (
    <>
      { loggin ? (
        <nav>
          <ul className='navigation__list'>
            <li className='navigation__item_type_signin'>
              <NavLink
                className={({isActive}) =>
                  isActive ?
                    'navigation__link navigation__link_type_signin navigation__link_active' :
                    'navigation__link navigation__link_type_signin'
              }
                to='/movies'
              >
                Фильмы
              </NavLink>
            </li>
            <li className='navigation__item_type_signin'>
              <NavLink
                className={({isActive}) =>
                  isActive ?
                    'navigation__link navigation__link_type_signin navigation__link_active' :
                    'navigation__link navigation__link_type_signin'
                }
                to='/saved-movies'
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ?
                  'navigation__link navigation__link_type_signin navigation__link_profile navigation__link_active' :
                  'navigation__link navigation__link_type_signin navigation__link_profile'
                }
                to='/profile'
              >
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul className='navigation__list'>
            <li className='navigation__item_type_logout'>
              <Link
                className='navigation__link_type_logout
                           navigation__link'
                to='/signup'
              >
                Регистрация
              </Link>
            </li>
            <li className='navigation__item_type_logout'>
              <Link
                className='navigation__link_type_logout                   navigation__link_enter
                           navigation__link'
                to='/signin'
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Navigation;

