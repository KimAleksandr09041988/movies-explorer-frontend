import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Footer from "../components/Footer/Footer";
import mainApi from "../utils/MainApi";
import { useState, useEffect } from "react";

const SavedMovies = ({width, loggedIn, handleGetMoviesSave, showPreloader, errorApi, moviesSave, setErrorApi}) => {
  const [showMovies, setShowMovies] = useState(() => {
    if(!moviesSave){
      return [];
    } else {
      return moviesSave;
    }
  })

  useEffect(() => {
    loggedIn &&
      handleGetMoviesSave();
      setErrorApi('');
    }, [])

  useEffect(() => {
      handleSortMovies(moviesSave);
  }, [moviesSave])

  function handleSortMovies(movies, str = ' ', checkbox = false) {
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
    setShowMovies(moviesFilter)
    if(moviesFilter.length === 0) {
      setErrorApi('Ничего не найдено')
    }
    return;
  }

  const handleDeleteMovie = async(data) => {
    try {
      await mainApi.deleteMovies(data._id);
      handleGetMoviesSave();
      data.isSave = false;
      console.log(data.isSave);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header width={width} loggedIn={loggedIn} />
      <main className="main">
        <h1 className="main__title">Сохраненные фильмы</h1>
        <SearchForm
          movies={moviesSave}
          handleSortMovies={handleSortMovies}
          errorApi={errorApi}
          setErrorApi={setErrorApi}
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
