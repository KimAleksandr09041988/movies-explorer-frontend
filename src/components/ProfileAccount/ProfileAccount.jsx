import './ProfileAccount.css'
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

const ProfileAccount = ({setCurrentUser}) => {
  const userData = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const [ visibility, setVisibility] = useState(false);
  const [ errorApi, setErrorApi] = useState('');
  const [ok, setOk] = useState(false)
  const navigate = useNavigate();

  const obj = {
    name: userData.name,
    email: userData.email,
  }

  useEffect(() => {
    setValues(obj)
  }, [])

  const changeValues = () => {
    if(!values.name && !values.email) {
      setValues(obj)
    }
  }

  const handleVisibility = () => {
    setVisibility(true);
    changeValues();
  }

  const handleChangeUserData = async(data) => {
    try {
      const newData = await mainApi.chandeUserData(data);
      setCurrentUser(newData);
      setOk(true)
    } catch (error) {
      const err = JSON.stringify(error).replace(/["{}]/g, '').replace('message:', '');
      setErrorApi(err)
      setOk(false)
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    handleChangeUserData(values);
    setErrorApi('');
  }

  const handleSignout = async() => {
    try {
      await mainApi.handleExit();
      localStorage.clear();
      sessionStorage.clear();
      navigate('/', {replace:true})
    } catch (error) {
      const data = JSON.stringify(error).replace(/["{:}]/g, '').replace('message', '');
      setErrorApi(data)
    }
  }

  return (
    <section className='profile'>
      <div className='container'>
        <div className='profile__wrapper'>
          <h2 className='profile__title'>Привет, {userData.name}</h2>
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
                    defaultValue={values.name || userData.name}
                    onChange={handleChange}
                    minLength='2'
                    maxLength='30'
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
                    defaultValue={values.email || userData.email}
                    onChange={handleChange}
                    type="email"
                    required />
              </div>
                <span className='profile__error'>
                  {errors.email}
                </span>
            </fieldset>
            <span className='profile__error'>{errorApi}</span>{ok && <span className='profile__ok'>Вы успешно изменили данные профиля</span>}
              {visibility && <button type='submit' className='profile__btn-submit' disabled={isValid ? false : true}>Сохранить</button>}
          </form>
            {visibility ? null : (
              <>
                <button type='button' className='profile__btn-redaction' onClick={handleVisibility} disabled={isValid ? false : true}>Редактировать</button>
                <button className='profile__btn-exit' onClick={handleSignout}>Выйти из аккаунта</button>
              </>
            )}
        </div>
      </div>
    </section>
  )
}

export default ProfileAccount;
