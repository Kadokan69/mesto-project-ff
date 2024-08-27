const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-21",
  headers: {
    authorization: "a8ed8923-c1b8-4d93-ac19-168eae7fcf29",
    "Content-Type": "application/json",
  },
};

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

export const getInitialProfil = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(handleResponse);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(handleResponse);
};

export const postNewCard = (data) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const deleteCardInServer = (data) => {
  return fetch(`${config.baseUrl}/cards/${data}`, {
    method: "DELETE",
    headers: config.headers,
  });
};

export const patchProfilEdit = (data) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const putLikeScore = (data) => {
  return fetch(`${config.baseUrl}/cards/likes/${data} `, {
    method: "PUT",
    headers: config.headers,
  }).then(handleResponse);
};

export const deleteLikeScore = (data) => {
  return fetch(`${config.baseUrl}/cards/likes/${data} `, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
};

export const patchUpdateAvatar = (data) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(handleResponse);
};
