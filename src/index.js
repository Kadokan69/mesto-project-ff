import "./pages/index.css";
import { createCard } from "./scripts/card.js";
import { openPopup, closePopup } from "./scripts/modal.js";
import { enableValidation, clearValidation } from "./scripts/validation.js";
import {
  getInitialCards,
  getInitialProfil,
  postNewCard,
  patchProfilEdit,
  patchUpdateAvatar,
  deleteCardInServer,
  putLikeScore,
  deleteLikeScore,
} from "./scripts/api.js";

const cardTemplate = document.querySelector("#card-template").content;
const placesContainer = document.querySelector(".places__list");
const addCardButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const profilEditButton = document.querySelector(".profile__edit-button");
const profilEditPopup = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const newCardName = document.querySelector(".popup__input_type_card-name");
const newCardUrl = document.querySelector(".popup__input_type_url");
const popupCard = document.querySelector(".popup_type_image");
const imagePopup = popupCard.querySelector(".popup__image");
const captiomPopup = popupCard.querySelector(".popup__caption");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profilAvatar = document.querySelector(".profile__image");
const avatarEditPopup = document.querySelector(".popup_type_edit_avatar");
const avatarPopupLink = avatarEditPopup.querySelector(
  ".popup__input_type_edit_avatar",
);
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let ownerId;

function renderLoading(check, popup) {
  if (check === true) {
    popup.querySelector(".button").textContent = "Сохранение...";
  } else {
    popup.querySelector(".button").textContent = "Сохранить";
  }
}

Promise.all([getInitialProfil(), getInitialCards()])
  .then(([owner, cards]) => {
    ownerId = owner._id;
    cards.forEach((itemCard) =>
      placesContainer.append(
        createCard(
          itemCard,
          ownerId,
          cardTemplate,
          addContentCardPopup,
          openPopup,
          closePopup,
          deleteCardInServer,
          putLikeScore,
          deleteLikeScore,
        ),
      ),
    );
    profileTitle.textContent = owner.name;
    profileDescription.textContent = owner.about;
    profilAvatar.style.backgroundImage = `url('${owner.avatar}')`;
    console.log(ownerId);
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(validationConfig);

addCardButton.addEventListener("click", () => openPopup(popupNewCard));

profilEditButton.addEventListener("click", () =>
  fillProfilePopup(profilEditPopup),
);

function fillProfilePopup(popup) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popup);
  clearValidation(popup, validationConfig);
}

function handleFormProfilEdit(evt) {
  evt.preventDefault();
  renderLoading(true, profilEditPopup);
  patchProfilEdit({
    name: `${nameInput.value}`,
    about: `${jobInput.value}`,
  })
    .then((result) => {
      profileTitle.textContent = result.name;
      profileDescription.textContent = result.about;
      closePopup(profilEditPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profilEditPopup);
    });
}

profilEditPopup.addEventListener("submit", handleFormProfilEdit);

function handleFormNewCard(evt) {
  evt.preventDefault();
  renderLoading(true, popupNewCard);
  postNewCard({
    name: `${newCardName.value}`,
    link: `${newCardUrl.value}`,
  })
    .then((cards) => {
      placesContainer.prepend(
        createCard(
          cards,
          ownerId,
          cardTemplate,
          addContentCardPopup,
          openPopup,
          closePopup,
          deleteCardInServer,
          putLikeScore,
          deleteLikeScore,
        ),
      );
      document.forms["new-place"].reset();
      closePopup(popupNewCard);
      clearValidation(popupNewCard, validationConfig);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupNewCard);
    });
}

popupNewCard.addEventListener("submit", handleFormNewCard);

function addContentCardPopup(link, name) {
  imagePopup.src = link;
  captiomPopup.textContent = name;
  imagePopup.alt = name;
  openPopup(popupCard);
}

profilAvatar.addEventListener("click", () => {
  openPopup(avatarEditPopup);
});

function updateAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, avatarEditPopup);
  patchUpdateAvatar({
    avatar: `${avatarPopupLink.value}`,
  })
    .then((result) => {
      profilAvatar.style.backgroundImage = `url('${result.avatar}')`;
      closePopup(avatarEditPopup);
      document.forms["edit_avatar"].reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, avatarEditPopup);
    });
}

avatarEditPopup.addEventListener("submit", updateAvatar);
