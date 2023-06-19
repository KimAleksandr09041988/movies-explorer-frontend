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
  }
}

const mainApi = new MainApi ({
  url: 'http://localhost:3001',
  headers: {'Content-Type': 'application/json'}
})

export default mainApi;
