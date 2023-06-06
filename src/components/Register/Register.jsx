import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='register'>
      <div className='container_avtorization'>
        <form className='register__form' action="#">
          <fieldset className='register__fieldset'>
            <label htmlFor="name" className='register__label'>Имя</label>
            <input id='name' className='register__input' type="text" required />
            <span className='register__error'>что то</span>
            <label htmlFor="email" className='register__label'>E-mail</label>
            <input id='email' className='register__input' type="email" required />
            <span className='register__error'>что то</span>
            <label htmlFor="password" className='register__label'>Пароль</label>
            <input id='password' className='register__input register__input_error' type="password" required />
            <span className='register__error register__error_active'>Что-то пошло не так...</span>
          </fieldset>
          <button type='submit' className='register__btn-form'>Зарегистрироваться</button>
        </form>
        <p className='register__description'>
          Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link>
        </p>
      </div>
    </section>
  )
}

export default Register;
