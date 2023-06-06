import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavTab from '../Navigation/Navigation';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  const location = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const [loggin, setLoggin] = React.useState(false);

  return(
    <header className='header'>
      <div className={headerPaths.includes(location) ?
                        'container header__container' :
                        'container_avtorization header__container_avtorization'
                      }>
        <Link to='/' className={headerPaths.includes(location) ? 'header__link-logo' : 'header__link-logo_list_avtorization'}>
          <img src={logo} className='header__logo' alt='Логотип' />
        </Link>
        { headerPaths.includes(location) && <NavTab /> }
        { location === '/signup' &&
          <h2 className='header__subtitle'>Добро пожаловать!</h2>
        }
        { location === '/signin' &&
          <h2 className='header__subtitle'>Рады видеть!</h2>
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
