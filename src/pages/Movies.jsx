import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import moviesApi from "../utils/MoviesApi";
import { useState } from "react";

const Movies = ({ width, loggedIn}) => {
  const [moviesShow, setMoviesShow] = useState([]);
  const [movies, setMovies] = useState([]);
  const checked = getStoredState();

  const getMoviesData = async() => {
    try {
      const resMovie = await moviesApi.getMovies();
      localStorage.setItem('movies', JSON.stringify(resMovie));
      setMovies(JSON.parse(localStorage.getItem('movies')));
    } catch (error) {
      console.log(error);
    }
  }

  function getStoredState() {
    return JSON.parse(localStorage.getItem('checkbox'))
  }

  return (
    <>
      <Header width={width} loggedIn={loggedIn} />
      <main className="main">
        <h1 className="main__title">Фильмы</h1>
        <SearchForm
          getMoviesData={getMoviesData}
          movies={movies}
          checked={checked}
          getStoredState={getStoredState}
        />
        <MoviesCardList movies={moviesShow} width={width} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
