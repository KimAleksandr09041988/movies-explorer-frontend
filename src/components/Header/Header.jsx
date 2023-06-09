import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = ({width, loggedIn}) => {
  const location = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const [open, setOpen] = React.useState(false)

  const toogleBurger = (e) => {
    e.currentTarget.classList.toggle('header__stripe-burger_active');
    setOpen(!open);
  }

  return(
    <header className='header'>
      <div className={headerPaths.includes(location) ?
                        'container header__container' :
                        'container-avtorization header__container-avtorization'
                      }>
        <Link to='/' className={headerPaths.includes(location) ? 'header__link-logo' : 'header__link-logo_list-avtorization'}>
          <img src={logo} className='header__logo' alt='Логотип' />
        </Link>
        { headerPaths.includes(location) && <Navigation
                                              open={open}
                                              width={width}
                                              loggedIn={loggedIn}
                                            /> }
        { location === '/signup' &&
          <h2 className='header__subtitle'>Добро пожаловать!</h2>
        }
        { location === '/signin' &&
          <h2 className='header__subtitle'>Рады видеть!</h2>
        }
        { headerPaths.includes(location) && loggedIn &&
          <button type='button' className='header__btn-burger' onClick={toogleBurger}>
            <span className='header__stripe-burger'></span>
          </button>}
      </div>
    </header>
  )
}

export default Header;
