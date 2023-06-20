import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import moviesApi from "../utils/MoviesApi";
import { useState } from "react";

const Movies = ({ width, loggedIn}) => {
  const [movies, setMovies] = useState([]);
  const [errorApi, setErrorApi] = useState('');
  const [showMoveies, setShowMovies] = useState(getStoredStateMovieShow())
  const [showPreloader, setShowPreloader] = useState(false)

  const getMoviesData = async() => {
    try {
      const resMovie = await moviesApi.getMovies();
      localStorage.setItem('movies', JSON.stringify(resMovie));
      setMovies(JSON.parse(localStorage.getItem('movies')));
    } catch (error) {
      setErrorApi(error)
    }
  }

  const handleCheked = (checked) => {
    if(checked.checked === false) {
      sessionStorage.setItem('checkbox', false)
    } else {
      sessionStorage.setItem('checkbox', true)
    }
  }

  function getStoredStateCheckbox() {
    return JSON.parse(sessionStorage.getItem('checkbox'));
  }

  function getStoredStateString() {
    return sessionStorage.getItem('stringMovie');
  }

  function getStoredStateMovieShow() {
    return JSON.parse(sessionStorage.getItem('showMoveies'));
  }

  const handleSortMovies = (str) => {
    setShowPreloader(true)
    const movies = JSON.parse(localStorage.getItem('movies'));
    const checkbox = getStoredStateCheckbox();
    let moviesFilter;
    if(checkbox) {
      moviesFilter = movies.filter((item) => {
        if(JSON.stringify(item).toLowerCase().includes(str.toLowerCase()) && item.duration < 40) {
          return item;
        }
      })
    } else {
      moviesFilter = movies.filter((item) => {
        if(JSON.stringify(item).toLowerCase().includes(str.toLowerCase())) {
          return item;
        }
      })

    }
    sessionStorage.setItem('stringMovie', str);
    sessionStorage.setItem('showMoveies', JSON.stringify(moviesFilter));
    setShowMovies(moviesFilter)
    if(moviesFilter.length === 0) {
      setErrorApi('Ничего не найдено')
    }
    setShowPreloader(false)
    return;
  }

  return (
    <>
      <Header width={width} loggedIn={loggedIn} />
      <main className="main">
        <h1 className="main__title">Фильмы</h1>
        <SearchForm
          getMoviesData={getMoviesData}
          movies={movies}
          getStoredStateCheckbox={getStoredStateCheckbox}
          handleSortMovies={handleSortMovies}
          errorApi={errorApi}
          setErrorApi={setErrorApi}
          getStoredStateString={getStoredStateString}
          handleCheked={handleCheked}
        />
        <MoviesCardList
          showMoveies={showMoveies}
          width={width}
          showPreloader={showPreloader}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
