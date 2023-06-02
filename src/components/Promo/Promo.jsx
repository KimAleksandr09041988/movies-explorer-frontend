import './Promo.css';

const Promo = (anchor) => {
   return (
    <section className='promo'>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <ul className='promo__list'>
        <li className='promo__item'>
          <a className='promo_link' href='#project'>О проекте</a>
        </li>
        <li className='promo__item'>
          <a className='promo_link' href='#tech'>Технологии</a>
        </li>
        <li className='promo__item'>
          <a className='promo_link' href='#aboutMe'>Студент</a>
        </li>
      </ul>
    </section>
  )
}

export default Promo;
