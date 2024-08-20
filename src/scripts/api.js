const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
  method: 'GET',
  headers: {
    authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
    'Content-Type': 'application/json'
  }
};


export const getInitialProfil = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
} 