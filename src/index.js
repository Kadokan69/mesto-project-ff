
import "./pages/index.css";
import { createCard, deleteCard, likeCard } from "./scripts/card.js";
import { openPopup, closePopup } from "./scripts/modal.js";
import { enableValidation, clearValidation } from "./scripts/validation.js"
import { getInitialCards, getInitialProfil } from "./scripts/api.js"


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
const deleteCardPopup = document.querySelector(".popup_type_delete-card");
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

getInitialProfil()
  .then((result) => {
    document.querySelector(".profile__title").textContent = result.name
    document.querySelector(".profile__description").textContent = result.about
    document.querySelector(".profile__image").style.backgroundImage = `url('${result.avatar}')`
  })
  .catch((err) => {
    console.log(err);
  });

getInitialCards()
  .then((result) => {
    result.forEach((itemCard) =>
      placesContainer.append(
        createCard(itemCard, cardTemplate, deleteCard, likeCard, addContentCardPopup),
      ),
    );
    
  })
  .catch((err) => {
    console.log(err);
  });


enableValidation(validationConfig); 

// initialCards.forEach((itemCard) =>
//   placesContainer.append(
//     createCard(itemCard, cardTemplate, deleteCard, likeCard, addContentCardPopup),
//   ),
// );

addCardButton.addEventListener("click", () => openPopup(popupNewCard));

profilEditButton.addEventListener("click", () => fillProfilePopup(profilEditPopup));

// Добавление информации из профиля в попап профиля
function fillProfilePopup(popup) {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openPopup(popup);
  clearValidation(popup, validationConfig)
}

//Редактирование профиля
function handleFormProfilEdit(evt) {
  evt.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;
  fetch('https://nomoreparties.co/v1/wff-cohort-21/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${nameInput.value}`,
      about: `${jobInput.value}`
    })
  });
  closePopup(profilEditPopup);
}

profilEditPopup.addEventListener("submit", handleFormProfilEdit);

//Добавление новой карточки
function handleFormNewCard(evt) {
  evt.preventDefault();
  fetch('https://nomoreparties.co/v1/wff-cohort-21/cards ', {
    method: 'POST',
    headers: {
      authorization: 'a8ed8923-c1b8-4d93-ac19-168eae7fcf29',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${newCardName.value}`,
      link: `${newCardUrl.value}`
    })
  });
  getInitialCards()
    .then((result) => {
      
      
      result.forEach((itemCard) =>
        placesContainer.append(
          createCard(itemCard, cardTemplate, deleteCard, likeCard, addContentCardPopup),
        ),
      );
      
    })
    .catch((err) => {
      console.log(err);
    });
  //const newCard = { name: newCardName.value, link: newCardUrl.value };
  // placesContainer.prepend(
  //   createCard(newCard, cardTemplate, deleteCard, likeCard, addContentCardPopup),
  // );
  document.forms["new-place"].reset();
  closePopup(popupNewCard);
  enableValidation(validationConfig); 
}

popupNewCard.addEventListener("submit", handleFormNewCard);

// Попап карточки
function addContentCardPopup(link, name) {
  imagePopup.src = link;
  captiomPopup.textContent = name;
  imagePopup.alt = name;
  openPopup(popupCard);
}

// Попап удаления карточки