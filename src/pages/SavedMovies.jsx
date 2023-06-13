import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import MoviesCardList from "../components/MoviesCardList/MoviesCardList";
import Footer from "../components/Footer/Footer";

const SavedMovies = ({width}) => {
  return (
    <>
      <Header width={width} />
      <main className="main">
        <h1 className="main__title">Сохраненные фильмы</h1>
        <SearchForm />
        <MoviesCardList width={width} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
