// Создание карточки
export function createCard(card, creator ,cardTemplate, likeCard, addContentCardPopup, openPopup, closePopup) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const removeButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeScore = cardElement.querySelector(".card__like-score");
  const cardTitile = cardElement.querySelector(".card__title");
  const deleteCardPopup = document.querySelector(".popup_type_delete-card");
  
  cardTitile.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  likeScore.textContent = card.likes.length;
  cardImage.addEventListener("click", () =>
    addContentCardPopup(cardImage.src, cardTitile.textContent),
  );
  removeButton.addEventListener("click", () => deleteCard(removeButton, deleteCardPopup, openPopup, closePopup, card));
  likeButton.addEventListener("click", () => likeCard(likeButton, card, likeScore));
  if(card.owner._id !== creator._id){
    removeButton.remove();
  };
  card.likes.forEach(element => {
    if(element._id == creator._id){
      likeButton.classList.toggle("card__like-button_is-active")
    };
  });

  return cardElement;
}



//Удаление карточки
function deleteCard(deleteItem, deleteCardPopup, openPopup, closePopup, card) {
  openPopup(deleteCardPopup)
  const aceptDeletBuuton = document.getElementById("popup__button-delete-card");
  aceptDeletBuuton.addEventListener("click", () => {
  console.log(card._id);
  fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/${card._id} `, {
     method: 'DELETE',
     headers: {
      authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
    }
    });
  const deleteCardItem = deleteItem.closest(".card");
  deleteCardItem.remove();
  closePopup(deleteCardPopup);
  }, 
  { once: true })};


//Лайк карточки
export function likeCard(likeButton, card, likeScore) {
  likeButton.classList.toggle("card__like-button_is-active")
  if(likeButton.classList.contains("card__like-button_is-active")){
    fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/likes/${card._id} `, {
      method: 'PUT',
      headers: {
       authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
     }
     })
     .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
     .then((result) => {
      likeScore.textContent = result.likes.length;
     });
     
  } else{
    fetch(`https://nomoreparties.co/v1/wff-cohort-21/cards/likes/${card._id} `, {
      method: 'DELETE',
      headers: {
       authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
     }
     })
     .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
     .then((result) => {
      likeScore.textContent = result.likes.length;
     });
    
  };
}

