import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import Movies from '../pages/Movies';
import SavedMovies from '../pages/SavedMovies';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='*' element={<Navigate />} />
      </Routes>
    </>
  );
}

export default App;
