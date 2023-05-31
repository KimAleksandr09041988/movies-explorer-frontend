import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className='project'>
      <div className='container project__container'>
        <h2 className='project__header'>О проекте</h2>
        <div className='project__wrapper'>
          <div className='project__wrapper-description'>
            <h3 className='project__header-descripton'>Дипломный проект включал 5 этапов</h3>
            <p className='project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='project__wrapper-description'>
            <h3 className='project__header-descripton'>На выполнение диплома ушло 5 недель</h3>
            <p className='project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='project__wrapper-graph'>
          <p className='project__graph project__graph_color_green'>1 неделя</p>
          <p className='project__graph project__graph_color_gray'>4 недели</p>
          <p className='project__graph-description'>Back-end</p>
          <p className='project__graph-description'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
