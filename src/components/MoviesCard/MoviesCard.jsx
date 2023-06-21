import './MoviesCard.css'

const MoviesCard = ({
    card,
    handlePostMovie,
    handleDeleteMovie
  }) => {
  const btn = document.querySelector('.card__icon');
  const classBtn = 'card__icon_active';

  const handleClickBtn = () => {
    if(card.isSave) {
      handleDeleteMovie(card, btn, classBtn);
    } else {
      handlePostMovie(card, btn, classBtn);
    }
  }
  console.log(card)
  return (
    <li className="card" tabIndex='0'>
      <img className="card__img"
        src={`https://api.nomoreparties.co${card.image.url}`}
        alt={card.image.name}
      />
      <div className="card__info">
        <div className='card__wrapper'>
          <h2 className="card__title">{card.nameRU}</h2>
          <span className='card__icon' onClick={handleClickBtn}></span>
        </div>
          <p className='card__time'>{card.duration}</p>
      </div>
    </li>
  )
}

export default MoviesCard;
