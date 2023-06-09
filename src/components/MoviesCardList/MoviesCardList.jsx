import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({
    showBtn,
    showPreloader,
    clickBtnStill,
    moviesPath,
    handlePostMovie,
    handleDeleteMovie,
  }) => {
  const location = useLocation().pathname;
  const moviesPaths = ['/movies'];

  return (
    <section className='movies'>
      <div className='container movies__container'>
        <div className='movies__wrapper'>
          {showPreloader && <Preloader />}
          <ul className='movies__list'>
            {moviesPath && moviesPath.map((card) => (
              <MoviesCard
                key={card.id}
                card={card}
                handlePostMovie={handlePostMovie}
                handleDeleteMovie={handleDeleteMovie}
              />
            ))}
          </ul>
          {
            moviesPaths.includes(location) && moviesPath && showBtn() &&
              <div className='movies__wrapper-btn'  >
                <button className='movies__btn' onClick={clickBtnStill}>Ещё</button>
              </div>
          }
        </div>
      </div>
    </section>
  )
}

export default MoviesCardList;
