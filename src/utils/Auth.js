export const registration = async (email, password, name) => {
  const res = await fetch('http://api.movies.kim.nomoredomains.rocks/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });
  const response = await res.json();
  if (res.ok) {
    return response;
  }
  return Promise.reject(response);
};

export const login = async (email, password) => {
  const res = await fetch('http://localhost:3001/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const response = await res.json();
  if (res.ok) {
    if (response.token) {
      localStorage.setItem('jwt', response.token);
    }
    return;
  }
  return Promise.reject(response);
};

export const checkAuthorization = async () => {
  const res = await fetch('http://localhost:3001/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};
