import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__wraper'>
          <p className='footer__description'>© 2020</p>
          <nav className='footer__navigation'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link' href="https://practicum.yandex.ru/" target='_blank'>Яндекс.Практикум</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link' href="https://github.com" target='_blank'>Github</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
