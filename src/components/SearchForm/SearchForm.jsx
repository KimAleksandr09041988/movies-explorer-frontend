import './SearchForm.css'

const SearchForm = ({getMoviesData, movies, checked, getStoredState}) => {

  const handleCheckMovies = () => {
    if(movies.length === 0) {
      getMoviesData();
    }
  }

  const handleCheked = async() => {
    localStorage.setItem('checkbox', !getStoredState())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckMovies();
  }

  return (
    <section className='search-form'>
      <div className='container search-form__container'>
        <div className='search-form__wrapper'>
          <form className='search-form__form' onSubmit={handleSubmit}>
            <fieldset className='search-form__fieldset'>
              <div className='search-form__wrapper-search'>
                <label className='search-form__label-search'></label>
                <input
                  id='search'
                  className='search-form__input'
                  name='search'
                  type="text"
                  minLength='2'
                  maxLength='50'
                  aria-label='Поиск'
                  placeholder='Фильм'
                  required
                  />
                <button className='search-form__btn' type='submit'></button>
              </div>
              <label
                className='search-form__label-checkbox'
              >
                <input
                  type="checkbox"
                  className='search-form__checkbox'
                  defaultChecked={checked}
                  onClick={handleCheked}
                />
                <span className='search-form__wrapper-custom-checkbox' >
                  <span className='search-form__circle-custom-checkbox'></span>
                </span>
                <span className='search-form__label-description'>Короткометражки</span>
              </label>
            </fieldset>
            <span className='search-form__error'></span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
