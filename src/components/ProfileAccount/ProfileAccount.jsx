import './ProfileAccount.css'
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useState } from 'react';
const ProfileAccount = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [ visibility, setVisibility] = useState(false);
  const [ disabled, setDisabled] = useState(false)

  const handleVisibility = () => {
    setVisibility(true)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if(visibility) {
      setDisabled(true)
    }
  }

  return (
    <section className='profile'>
      <div className='container'>
        <div className='profile__wrapper'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <form className='profile__form' onSubmit={submitForm}>
            <fieldset className='profile__fieldset'>
              <div className='profile__wrapper-field'>
                <label className='profile__label' htmlFor='name' >Имя</label>
                  <input
                    id='name'
                    className={`profile__input ${
                      errors.name ? 'profile__input_error' : ''
                    }`}
                    name='name'
                    defaultValue={values.name || 'Виталий'}
                    onChange={handleChange}
                    type="text"
                    required />
              </div>
                <span className='profile__error'>
                    {errors.name}
                </span>
              <div className='profile__wrapper-field'>
                <label className='profile__label' htmlFor="email" >E-mail</label>
                  <input
                    id='email'
                    className={`profile__input ${
                      errors.email ? 'profile__input_error' : ''
                    }`}
                    name='email'
                    defaultValue={values.email || 'pochta@yandex.ru'}
                    onChange={handleChange}
                    type="email"
                    required />
              </div>
                <span className='profile__error'>
                  {errors.email}
                </span>
            </fieldset>
            <span className='profile__error'></span>
              {visibility && <button type='submit' className='profile__btn-submit' disabled={disabled}>Сохранить</button>}
          </form>
            {visibility ? null : (
              <>
                <button type='button' className='profile__btn-redaction' onClick={handleVisibility}>Редактировать</button>
                <button className='profile__btn-exit'>Выйти из аккаунта</button>
              </>
            )}
        </div>
      </div>
    </section>
  )
}

export default ProfileAccount;
