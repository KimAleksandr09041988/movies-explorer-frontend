import './SearchForm.css'

const SearchForm = () => {
  return (
    <section className='search-form'>
      <h1 className='search-form__header'></h1>
      <form className='search-form__form'>
        <fieldset>

          <input type="text" />
          <button></button>
        </fieldset>
        <fieldset>
          <input type="checkbox" />
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;
