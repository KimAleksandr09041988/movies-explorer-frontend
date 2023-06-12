import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <section className='movies'>
      <div className='container movies__container'>
        <div className='movies__wrapper'>
          <ul className='movies__list'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </ul>
          <div className='movies__wrapper-btn'>
            <button className='movies__btn'>Ещё</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoviesCardList;
