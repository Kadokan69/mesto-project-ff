import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard } from "./scripts/card.js";
import { openPopup, closePopup } from "./scripts/modal.js";

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

initialCards.forEach((itemCard) =>
  placesContainer.append(
    createCard(itemCard, cardTemplate, addContentCardPopup),
  ),
);

addCardButton.addEventListener("click", () => openPopup(popupNewCard));

profilEditButton.addEventListener("click", () => profilPopup(profilEditPopup));

// Добавление информации из профеля в попап профеля
function profilPopup(popup) {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openPopup(popup);
}

//Редактирование профиля
function handleFormProfilEdit(evt) {
  evt.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;
  closePopup(profilEditPopup);
}

profilEditPopup.addEventListener("submit", handleFormProfilEdit);

//Добавление новой краточки
function handleFormNewCard(evt) {
  evt.preventDefault();
  const newCard = { name: newCardName.value, link: newCardUrl.value };
  placesContainer.prepend(
    createCard(newCard, cardTemplate, addContentCardPopup),
  );
  document.forms["new-place"].reset();
  closePopup(popupNewCard);
}

popupNewCard.addEventListener("submit", handleFormNewCard);

// Попап карточки
function addContentCardPopup(link, name) {
  imagePopup.src = link;
  captiomPopup.textContent = name;
  imagePopup.alt = name;
  openPopup(popupCard);
}
