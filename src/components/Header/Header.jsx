import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavTab from '../Navigation/Navigation';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  const location = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const [loggin, setLoggin] = React.useState(true);

  return(
    <header className='header'>
      <div className={headerPaths.includes(location) ?
                        'container header__container' :
                        'header__container_avtorization'
                      }>
        <Link to='/' className='header__link_logo'>
          <img src={logo} className='header__logo' alt='Логотип' />
        </Link>
        { headerPaths.includes(location) && <NavTab /> }
        { location === '/signup' &&
          <h2 className='header__title'>Добро пожаловать!</h2>
        }
        { location === '/signin' &&
          <h2 className='header__title'>Рады видеть!</h2>
        }
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
