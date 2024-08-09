// Создание крточки
export function createCard(card, cardTemplate, addContentCardPopup) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const removeButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardTitile = cardElement.querySelector(".card__title");
  cardTitile.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardImage.addEventListener("click", () =>
    addContentCardPopup(cardImage.src, cardTitile.textContent),
  );
  removeButton.addEventListener("click", () => deleteCard(removeButton));
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("card__like-button_is-active"),
  );

  return cardElement;
}

//Удаление карточки
function deleteCard(deleteItem) {
  const deleteCardItem = deleteItem.closest(".card");
  deleteCardItem.remove();
}
