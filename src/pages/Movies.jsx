import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import moviesApi from "../utils/MoviesApi";
import { useEffect, useState } from "react";

const Movies = ({ width, loggedIn}) => {

  const initialQuantity = () => {
    if(width >= 1200) {
      return 12;
    } else if(width < 1200 && width >= 910) {
      return 9;
    } else if(width < 910 && width >= 660) {
      return 8;
    } else {
      return 5;
    }
  }

  const [movies, setMovies] = useState(() => {
    if(!getStoreMovie()){
      return [];
    } else {
      return getStoreMovie();
    }
  });
  const [errorApi, setErrorApi] = useState('');
  const [showMoveies, setShowMovies] = useState(() => {
    if(getStoredStateMovieShow() === null) {
      return []
    } else {
      return getStoredStateMovieShow();
    }
  })
  const [showPreloader, setShowPreloader] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity());
  })

  const getMoviesData = async(str) => {
    setShowPreloader(true)
    try {
      const resMovie = await moviesApi.getMovies();
      localStorage.setItem('movies', JSON.stringify(resMovie));
      setMovies(getStoreMovie());
      handleSortMovies(str, resMovie)
    } catch (error) {
      setErrorApi(error)
      setShowPreloader(false)
    } finally {
      setShowPreloader(false)
    }
  }

  const handleCheked = (checked) => {
    if(checked.checked === false) {
      sessionStorage.setItem('checkbox', false)
    } else {
      sessionStorage.setItem('checkbox', true)
    }
  }

  function getStoreMovie() {
    return JSON.parse(localStorage.getItem('movies'));
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

  const handleSortMovies = (str, movies) => {
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
    return;
  }

  const handleMoviesShow = () => {
    if(showMoveies.length > 0) {
      const newMoviesShow = [...showMoveies.slice(0, quantity)];
      return newMoviesShow
    }
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
          setShowPreloader={setShowPreloader}
          getStoreMovie={getStoreMovie}
        />
        <MoviesCardList
          handleMoviesShow={handleMoviesShow}
          width={width}
          showPreloader={showPreloader}
        />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
