import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = (anchor) => {
   return (
    <section className='promo'>
      <div className='promo__wrapper'>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='promo__list'>
          <NavTab />
        </ul>
      </div>
    </section>
  )
}

export default Promo;
