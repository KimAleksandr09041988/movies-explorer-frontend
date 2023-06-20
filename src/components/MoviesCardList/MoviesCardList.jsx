import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ showMoveies, showPreloader }) => {
  const location = useLocation().pathname;
  const moviesPaths = ['/movies'];

  return (
    <section className='movies'>
      <div className='container movies__container'>
        <div className='movies__wrapper'>
          {showPreloader && <Preloader />}
          <ul className='movies__list'>
            {showMoveies && showMoveies.map((card, i) => (
              <MoviesCard
                key={card.id}
                card={card}
              />
            ))}
          </ul>
          {
            moviesPaths.includes(location) &&
              <div className='movies__wrapper-btn'>
                <button className='movies__btn'>Ещё</button>
              </div>
          }
        </div>
      </div>
    </section>
  )
}

export default MoviesCardList;
