import './SearchForm.css'
import React from 'react';


const SearchForm = () => {
  return (
    <section className='search-form'>
      <h1 className='search-form__header'>Фильмы</h1>
      <div className='container'>
        <div className='search-form__wrapper'>
          <form className='search-form__form'>
            <fieldset className='search-form__fieldset'>
              <label className='search-form__label_type_search' htmlFor="search"></label>
              <input id='search' className='search-form__input' name='search' type="text" aria-label='Поиск' placeholder='Поиск' />
              <button className='search-form__btn' type='submit'></button>
              <label className='search-form__label_type_checkbox' >
                <input type="checkbox" className='search-form__checkbox' />
                <span className='search-form__wrapper-custom-checkbox'>
                  <span className='search-form__circle-custom-checkbox'></span>
                </span>
                <p className='search-form__label-description'>Короткометражки</p>
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
