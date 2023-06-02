import './SearchForm.css'
import React from 'react';


const SearchForm = () => {
  return (
    <section className='search-form'>
      <h1 className='search-form__header'></h1>
      <form className='search-form__form'>
        <fieldset>
          <input className='search-form__input' name='search' type="text" aria-label='Поиск' placeholder='Поиск' />
          <button type='submit'></button>
          <label className='search-form__label' >
            <input type="checkbox" className='search-form__checkbox' />
            <span className='search-form__wrapper-custom-checkbox'>
              <span className='search-form__circle-custom-checkbox'></span>
            </span>
            <p className='search-form__label-description'>Короткометражки</p>
          </label>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;
