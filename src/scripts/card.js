// Создание карточки
export function createCard(card, cardTemplate, likeCard, addContentCardPopup, openPopup, closePopup) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const removeButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeScore = cardElement.querySelector(".card__like-score");
  const cardTitile = cardElement.querySelector(".card__title");
  const deleteCardPopup = document.querySelector(".popup_type_delete-card");
  if(card.owner._id !== '8e978d0da67fdc629650fdb2'){
    removeButton.remove();
  };
  cardTitile.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  likeScore.textContent = card.likes.length
  cardImage.addEventListener("click", () =>
    addContentCardPopup(cardImage.src, cardTitile.textContent),
  );
  removeButton.addEventListener("click", () => deleteCard(removeButton, deleteCardPopup, openPopup, closePopup, card));
  likeButton.addEventListener("click", () => likeCard(likeButton));
  

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
export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active")
}

