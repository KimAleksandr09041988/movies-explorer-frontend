import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";

const Movies = ({movies, width}) => {
  return (
    <>
      <Header width={width} />
      <main className="main">
        <h1 className="main__title">Фильмы</h1>
        <SearchForm />
        <MoviesCardList movies={movies} width={width} />
      </main>
      <Footer />
    </>
  )
}

export default Movies;
