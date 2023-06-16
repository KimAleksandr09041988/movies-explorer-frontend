import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({ movies }) => {
  const location = useLocation().pathname;
  const moviesPaths = ['/movies']

    return (
    <section className='movies'>
      <div className='container movies__container'>
        <div className='movies__wrapper'>
          <ul className='movies__list'>
            {movies && movies.map((card, i) => (
              <MoviesCard
                key={i}
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
