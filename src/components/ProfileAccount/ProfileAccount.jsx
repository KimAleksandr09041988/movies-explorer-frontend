import './ProfileAccount.css'
import { useState } from 'react';

const ProfileAccount = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  function handleEditName(e) {
    setName(e.target.value)
  }

  function handleEditEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <section className='profile'>
      <div className='container'>
        <div className='profile__wrapper'>
          <h2 className='profile__title'>Привет, {name}</h2>
          <form className='profile__form' action="#">
            <fieldset className='profile__fieldset'>
              <label className='profile__label' htmlFor="name">
                Имя
                <input className='profile__input' id='name' name='name' type="text" value={name} onChange={handleEditName} required />
              </label>
              <label className='profile__label' htmlFor="email">
                Email
                <input className='profile__input' id='email' name='email' type="email" value={email} onChange={handleEditEmail} required />
              </label>
            </fieldset>
              <button type='submit' className='profile__btn-form'>Редактировать</button>
          </form>
          <button className='profile__btn-exit'>Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  )
}

export default ProfileAccount;
