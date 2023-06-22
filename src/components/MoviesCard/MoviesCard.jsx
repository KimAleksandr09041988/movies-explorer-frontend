import './MoviesCard.css'

const MoviesCard = ({
    card,
    handlePostMovie,
    handleDeleteMovie
  }) => {

  const classBtn = 'card__icon_active';
  const hour = Math.trunc(card.duration / 60)
  const minute = card.duration % 60 < 10 ? `0${card.duration % 60}` : card.duration % 60
  const isSave = `card__icon ${card.isSave && 'card__icon_active'}`


  const handleClickBtn = (e) => {
    const btn = e.target
    if(card.isSave) {
      handleDeleteMovie(card);
    } else {
      handlePostMovie(card);
    }
  }

  return (
    <li className="card" tabIndex='0'>
      <a href={card.trailerLink} target='_blank'>
        <img className="card__img"
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={card.image.name}
        />
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
