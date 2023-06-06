import './NavTab.css';

const NavTab = () => {
  return (
    <>
      <li className='promo__item'>
        <a className='promo_link' href='#project'>О проекте</a>
      </li>
      <li className='promo__item'>
        <a className='promo_link' href='#tech'>Технологии</a>
      </li>
      <li className='promo__item'>
        <a className='promo_link' href='#aboutMe'>Студент</a>
      </li>
    </>
  )
}

export default NavTab;
