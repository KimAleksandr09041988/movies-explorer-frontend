class MainApi {
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

  async chandeUserData(data) {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    });
    return this._getResponseData(res);
  };

  async handleExit() {
    const res = await fetch(`${this._url}/signout`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._getResponseData(res);
  };

  async getMovies() {
    const res = await fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: 'include',
    });
    return this._getResponseData(res);
  };

  async postMovies(data) {
    const res = await fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        id: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        isSave: true,
      })
    });
    return this._getResponseData(res);
  };

  async deleteMovies(elem) {
    const res = await fetch(`${this._url}/movies/${elem}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
    return this._getResponseData(res);
  };
}

const mainApi = new MainApi ({
  url: 'http://localhost:3001',
  headers: {'Content-Type': 'application/json'}
})

export default mainApi;
