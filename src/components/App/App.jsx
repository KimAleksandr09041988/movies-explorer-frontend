import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../../pages/Profile';
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState();
  const [listMovies, setListMovies] = useState([])

  const getMoviesData = async() => {
    try {
      const resMovie = await moviesApi.getMovies();
      setMovies(resMovie);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMoviesData();
    getWidth();
    window.addEventListener('resize', () => {
      getWidth();
    })
  },[]);

  function getWidth() {
    setWidth(document.documentElement.offsetWidth);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Main width={width}/>} />
        <Route path='/movies' element={<Movies width={width} movies={listMovies}  />} />
        <Route path='/saved-movies' element={<SavedMovies width={width}/>} />
        <Route path='/profile' element={<Profile width={width}/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
