class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  chandeUserData = async(data) => {
    const res = await fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    });
    const response = await res.json();
    if (res.ok) {
      return response;
    }
    return Promise.reject(response);
  };

  handleExit = async() => {
    const res = await fetch(`${this._url}/signout`, {
      headers: this._headers,
      credentials: 'include',
    });
    const response = await res.json();
    if (res.ok) {
      return response;
    }
    return Promise.reject(response);
  };

  postMovies = async(data) => {
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
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    });
    const response = await res.json();
    if (res.ok) {
      return response;
    }
    return Promise.reject(response);
  };
}

const mainApi = new MainApi ({
  url: 'http://localhost:3001',
  headers: {'Content-Type': 'application/json'}
})

export default mainApi;
