import Header from '../components/Header/Header'
import Promo from "../components/Promo/Promo";
import AboutProject from "../components/AboutProject/AboutProject";
import Tech from "../components/Tech/Tech";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from '../components/Footer/Footer';

const About = ({width, loggedIn}) => {
  return (
    <>
      <Header width={width} loggedIn={loggedIn} />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Tech />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default About;
