import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
      <div className='container_avtorization'>
        <form className='login__form' action="#">
          <fieldset className='login__fieldset'>
            <label htmlFor="email" className='login__label'>E-mail</label>
            <input id='email' className='login__input' type="email" required />
            <span className='login__error'>что то</span>
            <label htmlFor="password" className='login__label'>Пароль</label>
            <input id='password' className='login__input login__input_error' type="password" required />
            <span className='login__error login__error_active'>Что-то пошло не так...</span>
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
