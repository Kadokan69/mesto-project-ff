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
    deleteCard({
      removeButton,
      deleteCardPopup,
      openPopup,
      closePopup,
      card,
      deleteCardInServer,
    }),
  );
  likeButton.addEventListener("click", () =>
    likeCard({ likeButton, card, likeScore, putLikeScore, deleteLikeScore }),
  );
  if (card.owner._id !== creator) {
    removeButton.remove();
  }
  card.likes.forEach((element) => {
    if (element._id == creator) {
      likeButton.classList.toggle("card__like-button_is-active");
    }
  });

  return cardElement;
}

function deleteCard(data) {
  data.openPopup(data.deleteCardPopup);
  data.deleteCardPopup.onsubmit = (evt) => submitDeleteCard(evt, data);
}

function submitDeleteCard(evt, data) {
  evt.preventDefault();
  data
    .deleteCardInServer(data.card._id)
    .then(() => {
      data.closePopup(data.deleteCardPopup);
      const deleteCardItem = data.removeButton.closest(".card");
      deleteCardItem.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

export function likeCard(data) {
  if (!data.likeButton.classList.contains("card__like-button_is-active")) {
    data
      .putLikeScore(data.card._id)
      .then((result) => {
        data.likeScore.textContent = result.likes.length;
        data.likeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (data.likeButton.classList.contains("card__like-button_is-active")) {
    data
      .deleteLikeScore(data.card._id)
      .then((result) => {
        data.likeScore.textContent = result.likes.length;
        data.likeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
