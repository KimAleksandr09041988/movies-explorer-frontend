import './SearchForm.css'
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useEffect } from 'react';

const SearchForm = ({getMoviesData, movies, getStoredStateCheckbox, handleSortMovies, errorApi, setErrorApi, getStoredStateString, handleCheked }) => {
  const obj = {search: ''};
  const { values, handleChange, setValues, setIsValid } = useFormAndValidation();
  const checked = document.querySelector('.search-form__checkbox');

  useEffect(() => {
    setIsValid(false)
    setValues(obj)
  },[])

  const handleCheckMovies = () => {
    if(movies.length === 0) {
      getMoviesData();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorApi('');
    handleCheckMovies();
    handleCheked(checked);
    handleSortMovies(values.search);
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
                  maxLength='50'
                  aria-label='Поиск'
                  placeholder='Фильм'
                  defaultValue={values.name || getStoredStateString() || ''}
                  onChange={handleChange}
                  required
                  />
                <button
                  className='search-form__btn'
                  type='submit'
                ></button>
              </div>
              <label
                className='search-form__label-checkbox'
              >
                <input
                  type="checkbox"
                  className='search-form__checkbox'
                  defaultChecked={getStoredStateCheckbox()}
                />
                <span className='search-form__wrapper-custom-checkbox' >
                  <span className='search-form__circle-custom-checkbox'></span>
                </span>
                <span className='search-form__label-description'>Короткометражки</span>
              </label>
            </fieldset>
            <span className='search-form__error'>{errorApi}</span>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
