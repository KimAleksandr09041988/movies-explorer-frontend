import './AboutMe.css';
import foto from '../../images/foto.jpg'

const AboutMe = () => {
  return (
    <section className='about-me' id='aboutMe'>
      <div className='container about-me__container'>
        <h2 className='about-me__header'>Студент</h2>
        <div className='about-me__wrapper'>
          <div className='about-me__wrapper-description'>
            <h3 className='about-me__header-descripton'>Александр</h3>
            <p className='about-me__description-personal'>Web-разработчик, 35 лет</p>
              <p className='about-me__description'>Я родился в г.Ангрен, на данный момент живу в г.Кызыл. Закончил бакалавриат факультета стоматологии ТашМА, а ординатуру факультета ортопедической стоматологии в ИГМУ. Женат. Начал кодить c сентября 2022г. Ближе к концу курса по веб-разработке, устроился на работу в компанию ООО "ДЖЕЛАТА".
            </p>
            <a className='about-me__link-github' href="https://github.com/KimAleksandr09041988" target="_blank">Github</a>
          </div>
          <img className='about-me__img' src={foto} alt="фотография" />
        </div>
        <div className='about-me__portfolio'>
          <h3 className='about-me__header-portfolio'>Портфолио</h3>
          <ul className='about-me__list'>
            <li className='about-me__item'>
              <a className='about-me__link-pet' href="https://kimaleksandr09041988.github.io/how-to-learn/" alt="Статичный сайт" target="_blank">
                Статичный сайт
                <span className='about-me__icon'></span>
              </a>
            </li>
            <li className='about-me__item'>
              <a className='about-me__link-pet' href="https://kimaleksandr09041988.github.io/russian-travel/" alt="Адаптивный сайт" target="_blank">
                Адаптивный сайт
                <span className='about-me__icon'></span>
              </a>
            </li>
            <li className='about-me__item'>
              <a className='about-me__link-pet' href="https://kimaleksandr09041988.github.io/mesto/" alt="Одностраничное приложение" target="_blank">
                Одностраничное приложение
                <span className='about-me__icon'></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
