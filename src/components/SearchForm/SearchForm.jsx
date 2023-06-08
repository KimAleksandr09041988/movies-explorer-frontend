import './SearchForm.css'
import React from 'react';


const SearchForm = () => {
  return (
    <section className='search-form'>
      <div className='container search-form__container'>
        <div className='search-form__wrapper'>
          <form className='search-form__form'>
            <fieldset className='search-form__fieldset'>
              <div className='search-form__wrapper-search'>
                <label className='search-form__label_type_search'></label>
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
              <label className='search-form__label_type_checkbox' >
                <input type="checkbox" className='search-form__checkbox' />
                <span className='search-form__wrapper-custom-checkbox' >
                  <span className='search-form__circle-custom-checkbox'></span>
                </span>
                <p className='search-form__label-description'>Короткометражки</p>
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
