import './Login.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation';
import { useEffect } from 'react';
import {regexpEmail} from '../../utils/constants'

const Login = ({handleLogin, errorLogin}) => {
    const obj = {
      password: '',
      email: ''
    }

    const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();

    useEffect(() => {
      setValues(obj)
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin(values.email, values.password)
    }

  return (
    <section className='login'>
      <div className='container-avtorization'>
        <form className='login__form' onSubmit={handleSubmit}>
          <fieldset className='login__fieldset'>
            <label htmlFor="email" className='login__label'>E-mail</label>
            <input
              pattern={regexpEmail}
              id='email'
              className={`login__input ${
                errors.email ? 'login__input_error' : ''
              }`}
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              type="email"
              required
            />
            <span className='login__error'>
              {errors.email}
            </span>
            <label htmlFor="password" className='login__label'>Пароль</label>
            <input
              id='password'
              className={`login__input ${
                errors.password ? 'login__input_error' : ''
              }`}
              name='password'
              value={values.password || ''}
              onChange={handleChange}
              type="password"
              minLength='2'
              maxLength='30'
              required />
             <span className='login__error'>
                {errors.password}
            </span>
          </fieldset>
          <span className='login__error'>{errorLogin}</span>
          <button
            type='submit'
            className='login__btn-form'
            disabled={isValid ? false : true}
            >Войти</button>
        </form>
        <p className='login__description'>
          Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link>
        </p>
      </div>
    </section>
  )
}

export default Login;
