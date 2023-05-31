import './Hero.css';

const Hero = (anchor) => {
   return (
    <section className='hero'>
      <h1 className='hero__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <ul className='hero__list'>
        <li className='hero__item'>
          <a className='hero_link' href={anchor}>О проекте</a>
        </li>
        <li className='hero__item'>
          <a className='hero_link' href={anchor}>Технологии</a>
        </li>
        <li className='hero__item'>
          <a className='hero_link' href={anchor}>Студент</a>
        </li>
      </ul>
    </section>
  )
}

export default Hero;
