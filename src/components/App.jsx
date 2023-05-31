import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import About from '../pages/About';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
