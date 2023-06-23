import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../../pages/Profile';
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { login, checkAuthorization } from '../../utils/Auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import mainApi from '../../utils/MainApi';

const App = () => {
  const [loggedIn, setLoggedin] = useState(true);
  const [width, setWidth] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [errorLogin, setErrorLogin] = useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [showPreloader, setShowPreloader] = useState(false);
  const [errorApi, setErrorApi] = useState('');
  const [moviesSave, setMoviesSave] = useState([]);


  useEffect(() => {
    getWidth();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        getWidth();
      }, 2000);
    })
  },[]);

  useEffect(() => {
    handleAuthorization();
  }, [navigate]);

  useEffect(() => {
    loggedIn &&
      handleGetMoviesSave()
  }, [loggedIn])

  const handleAuthorization = async() => {
     try {
      const dataUser = await checkAuthorization();
      setCurrentUser(dataUser);
      setLoggedin(true)
     } catch (error) {
      console.log(error)
      setLoggedin(false)
     }
  }

  async function handleGetMoviesSave() {
    setShowPreloader(true)
    try {
      const res = await mainApi.getMovies();
      setMoviesSave(res);
    } catch (error) {
      setShowPreloader(false)
      const data = JSON.stringify(error).replace(/["{:}]/g, '').replace('message', '');
      setErrorApi(data)
    } finally {
      setShowPreloader(false)
    }
  }

  function getWidth() {
    setWidth(document.documentElement.offsetWidth);
  }

  const handleLogin = async(email, password) => {
    try {
      await login(email, password);
      setLoggedin(true);
      navigate('/movies', { replace:true })
    } catch (error) {
      const data = JSON.stringify(error).replace(/["{:}]/g, '').replace('message', '');
      setErrorLogin(data);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              moviesSave={moviesSave}
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
              handleGetMoviesSave={handleGetMoviesSave}
              showPreloader={showPreloader}
              errorApi={errorApi}
              moviesSave={moviesSave}
              setErrorApi={setErrorApi}
            />
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path='/signin'
          element={<Signin
                      handleLogin={handleLogin}
                      errorLogin={errorLogin}
                   />
                  }
        />
        <Route
          path='/signup'
          element={
            <Signup
              handleLogin={handleLogin}
            />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
