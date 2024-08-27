export function createCard(
  card,
  creator,
  cardTemplate,
  addContentCardPopup,
  openPopup,
  closePopup,
  deleteCardInServer,
  putLikeScore,
  deleteLikeScore,
) {
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
  removeButton.addEventListener("click", () =>
    deleteCard(
      removeButton,
      deleteCardPopup,
      openPopup,
      closePopup,
      card,
      deleteCardInServer,
    ),
  );
  likeButton.addEventListener("click", () =>
    likeCard(likeButton, card, likeScore, putLikeScore, deleteLikeScore),
  );
  if (card.owner._id !== creator._id) {
    removeButton.remove();
  }
  card.likes.forEach((element) => {
    if (element._id == creator._id) {
      likeButton.classList.toggle("card__like-button_is-active");
    }
  });

  return cardElement;
}

function deleteCard(
  deleteItem,
  deleteCardPopup,
  openPopup,
  closePopup,
  card,
  deleteCardInServer,
) {
  openPopup(deleteCardPopup);
  const aceptDeletBuuton = document.getElementById("popup__button-delete-card");
  aceptDeletBuuton.addEventListener(
    "click",
    () => {
      const deleteCardItem = deleteItem.closest(".card");
      deleteCardInServer(card._id);
      deleteCardItem.remove();
      closePopup(deleteCardPopup);
    },
    { once: true },
  );
}

export function likeCard(
  likeButton,
  card,
  likeScore,
  putLikeScore,
  deleteLikeScore,
) {
  likeButton.classList.toggle("card__like-button_is-active");
  if (likeButton.classList.contains("card__like-button_is-active")) {
    putLikeScore(card._id).then((result) => {
      likeScore.textContent = result.likes.length;
    });
  } else {
    deleteLikeScore(card._id).then((result) => {
      likeScore.textContent = result.likes.length;
    });
  }
}
