export const registration = async (email, password, name) => {
  const res = await fetch('https://api.movies.kim.nomoredomains.rocks/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password, name }),
  });
  const response = await res.json();
  if (res.ok) {
    return response;
  }
  return Promise.reject(response);
};

export const login = async (email, password) => {
  const res = await fetch('https://api.movies.kim.nomoredomains.rocks/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  const response = await res.json();
  if (res.ok) {
    return response;
  }
  return Promise.reject(response);
};

export const checkAuthorization = async () => {
  const res = await fetch('https://api.movies.kim.nomoredomains.rocks/users/me', {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject(await res.json());
};
