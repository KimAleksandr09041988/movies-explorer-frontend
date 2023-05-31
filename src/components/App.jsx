import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import AboutProject from '../pages/AboutProject';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AboutProject />} />
      </Routes>
    </>
  );
}

export default App;
