import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({
    card,
    handlePostMovie,
    handleDeleteMovie
  }) => {
  const location = useLocation().pathname;
  const path = ['/saved-movies']
  const hour = Math.trunc(card.duration / 60)
  const minute = card.duration % 60 < 10 ? `0${card.duration % 60}` : card.duration % 60
  const isSave = `card__icon ${card.isSave && 'card__icon_active'}`


  const handleClickBtn = (e) => {
    if(path.includes(location)) {
      handleDeleteMovie(card);
    } else {
      if(card.isSave) {
        handleDeleteMovie(card);
      } else {
        handlePostMovie(card);
      }
    }
  }

  return (
    <li className="card" tabIndex='0'>
      <a href={card.trailerLink} target='_blank'>
      {path.includes(location) ?
        <img className="card__img"
          src={card.image}
          alt={card.nameRU}
        /> :
        <img className="card__img"
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={card.image.name}
        />
      }
      </a>
      <div className="card__info">
        <div className='card__wrapper'>
          <h2 className="card__title">{card.nameRU}</h2>
          <span className={isSave} onClick={handleClickBtn}></span>
        </div>
          <p className='card__time'>{`${hour}ч${minute}м`}</p>
      </div>
    </li>
  )
}

export default MoviesCard;
