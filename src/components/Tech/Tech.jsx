import './Tech.css'

const Tech = () => {
  return (
    <section className='tech' id='tech'>
      <div className='container tech__container'>
        <h2 className='tech__header'>Технологии</h2>
        <div className='tech__wrapper'>
          <div className='tech__wrapper-description'>
            <h3 className='tech__header-descripton'>7 технологий</h3>
            <p className='tech__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
          <ul className='tech__list'>
            <li className='tech__item'>
              <p className='tech__description-icon'>HTML</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>CSS</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>JS</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>React</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>Git</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>Express.js</p>
            </li>
            <li className='tech__item'>
              <p className='tech__description-icon'>mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Tech;
