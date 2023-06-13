class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject((`Ошибка: ${res.status}`))
    }
  }

  async getMovies() {
    const res = await fetch(`${this._url}`, {
      headers: this._headers
    });
    return this._getResponseData(res);
  }
}

const moviesApi = new MoviesApi ({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {'Content-Type': 'application/json'}
})

export default moviesApi;
