import './Login.css';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../utils/hooks/useFormAndValidation'
const Login = () => {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  return (
    <section className='login'>
      <div className='container_avtorization'>
        <form className='login__form' action="#">
          <fieldset className='login__fieldset'>
            <label htmlFor="email" className='login__label'>E-mail</label>
            <input
              id='email'
              className={`login__input ${
                isValid ? '' : 'login__input_error'
              }`}
              name='email'
              value={values.email || ''}
              onChange={handleChange}
              type="email"
              required
            />
            <span
              className={`login__error ${
                isValid ? '' : 'login__error_active'
              }`}>
                {errors.email}
            </span>
            <label htmlFor="password" className='login__label'>Пароль</label>
            <input
              id='password'
              className={`login__input ${
                isValid ? '' : 'login__input_error'
              }`}
              name='password'
              value={values.password || ''}
              onChange={handleChange}
              type="password"
              minLength='2'
              maxLength='30'
              required />
             <span
              className={`login__error ${
                isValid ? '' : 'login__error_active'
              }`}>
                {errors.password}
            </span>
          </fieldset>
          <button type='submit' className='login__btn-form'>Войти</button>
        </form>
        <p className='login__description'>
          Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link>
        </p>
      </div>
    </section>
  )
}

export default Login;
