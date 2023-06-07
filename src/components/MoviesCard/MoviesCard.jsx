import './MoviesCard.css'
import pic from '../../images/pic__COLOR_pic.jpg'

const MoviesCard = ({ card }) => {
  return (
    <li className="card" tabIndex='0'>
      <img className="card__img"
        src={pic}
        alt='картинка'
      />
      <div className="card__info">
        <div className='card__wrapper'>
          <h2 className="card__title">33 слова о дизайне</h2>
          <span className='card__icon card__icon_active'></span>
        </div>
          <p className='card__time'>1ч42м</p>
      </div>
    </li>
  )
}

export default MoviesCard;
