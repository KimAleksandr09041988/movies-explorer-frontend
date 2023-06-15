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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = () => {
  const [loggedIn, setLoggedin] = useState(false);
  const [width, setWidth] = useState();

  const getMoviesData = async() => {
    try {
      const resMovie = await moviesApi.getMovies();
      localStorage.setItem('movies', JSON.stringify(resMovie));
    } catch (error) {
      console.log(error);
    }
  }

  const movies = JSON.parse(localStorage.getItem('movies'))

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
        <Route
          path='/'
          element={<Main width={width} loggedIn={loggedIn}/>}
        />
        <Route
          path='/movies'
          element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              width={width}
              movies={movies}
            />
          }
        />
        <Route
          path='/saved-movies'
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              width={width}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path='/signin'
          element={<Signin />}
        />
        <Route
          path='/signup'
          element={
            <Signup

            />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
