import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Footer from "../components/Footer/Footer";
import mainApi from "../utils/MainApi";
import { useState, useEffect } from "react";

const SavedMovies = ({width, loggedIn}) => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [errorApi, setErrorApi] = useState('');
  const [movies, setMovies] = useState(() => {
    if(getStoreMovie()) {
      return getStoreMovie()
    } else {
      return [];
    }
  })

  const [showMovies, setShowMovies] = useState(() => {
    if(getStoredStateMovieShow()) {
      return getStoredStateMovieShow()
    } else {
      return [];
    }
  })

  useEffect(() => {
    loggedIn &&
      handlePostMovie();
  }, [])

  const handlePostMovie = async() => {
    setShowPreloader(true)
    try {
      const res = await mainApi.getMovies();
      setMovies(res);
      handleSortMovies(res)
      sessionStorage.setItem('movieSave', JSON.stringify(res))
    } catch (error) {
      console.log(error)
    }
    setShowPreloader(false)
  }

  function handleSortMovies(movies, str = '') {
    const checkbox = getStoredStateCheckbox() ? getStoredStateCheckbox() : false;
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
    sessionStorage.setItem('stringMovieSave', str);
    sessionStorage.setItem('showMoviesSave', JSON.stringify(moviesFilter));
    setShowMovies(moviesFilter)
    if(moviesFilter.length === 0) {
      setErrorApi('Ничего не найдено')
    }
    return;
  }

  const handleCheked = (checked) => {
    if(checked.checked === false) {
      sessionStorage.setItem('checkbox', false)
    } else {
      sessionStorage.setItem('checkbox', true)
    }
  }

  const handleDeleteMovie = async(data) => {
    try {
      const res = await mainApi.deleteMovies(data._id);
      handlePostMovie()
      data.isSave = false;
      console.log(data.isSave);
    } catch (error) {
      console.log(error)
    }
  }

  function getStoreMovie() {
    return JSON.parse(sessionStorage.getItem('movieSave'));
  }

  function getStoredStateCheckbox() {
    return JSON.parse(sessionStorage.getItem('checkboxSave'));
  }

  function getStoredStateString() {
    return sessionStorage.getItem('stringMovieSave');
  }

  function getStoredStateMovieShow() {
    return JSON.parse(sessionStorage.getItem('showMoviesSave'));
  }

  return (
    <>
      <Header width={width} loggedIn={loggedIn} />
      <main className="main">
        <h1 className="main__title">Сохраненные фильмы</h1>
        <SearchForm
          getMoviesData={''}
          movies={movies}
          getStoredStateCheckbox={getStoredStateCheckbox}
          handleSortMovies={handleSortMovies}
          errorApi={errorApi}
          setErrorApi={setErrorApi}
          getStoredStateString={getStoredStateString}
          handleCheked={handleCheked}
          getStoreMovie={getStoreMovie}
        />
        <MoviesCardList
          showPreloader={showPreloader}
          clickBtnStill={''}
          showBtn={''}
          moviesPath={showMovies}
          handlePostMovie={''}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
