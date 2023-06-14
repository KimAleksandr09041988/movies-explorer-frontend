import './Register.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation'
import { useEffect } from 'react';

const Register = ({handleRegistration}) => {
  const obj = {
    name: '',
    password: '',
    email: ''
  }

  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

  useEffect(() => {
    setValues(obj)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values.email, values.password, values.name)
  }

  return (
    <section className='register'>
      <div className='container-avtorization'>
        <form className='register__form' onSubmit={handleSubmit}>
          <fieldset className='register__fieldset'>
            <label
              htmlFor="name"
              className='register__label'>
                Имя
            </label>
            <input
              id='name'
              className={`register__input ${
                errors.name ? 'register__input_error' : ''
              }`}
              name='name'
              value={values.name || ''}
              onChange={handleChange}
              type="text"
              minLength='2'
              maxLength='30'
              required />
            <span className='register__error'>
              {errors.name}
            </span>
            <label
              htmlFor="email"
              className='register__label'>
                E-mail
            </label>
            <input
              id='email'
              className={`register__input ${
                errors.email ? 'register__input_error' : ''
              }`}
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              type="email"
              required
            />
            <span className='register__error'>
              {errors.email}
            </span>
            <label
              htmlFor="password"
                className='register__label'>
                  Пароль
            </label>
            <input
              id='password'
              className={`register__input ${
                errors.password ? 'register__input_error' : ''
              }`}
              name='password'
              value={values.password || ''}
              onChange={handleChange}
              type="password"
              minLength='2'
              maxLength='30'
              required />
            <span className='register__error'>
              {errors.password}
            </span>
          </fieldset>
          <span className='register__error'></span>
          <button
            type='submit'
            className='register__btn-form'
            disabled={isValid ? false : true }
            >
              Зарегистрироваться
          </button>
        </form>
        <p className='register__description'>
          Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link>
        </p>
      </div>
    </section>
  )
}

export default Register;
