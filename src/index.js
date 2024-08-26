import "./pages/index.css";
import { createCard, likeCard, deleteCardPopup } from "./scripts/card.js";
import { openPopup, closePopup } from "./scripts/modal.js";
import { enableValidation, clearValidation } from "./scripts/validation.js"
import { getInitialCards, getInitialProfil, postCreatNewCard, patchProfilEdit, patchUpdateAvatar } from "./scripts/api.js"


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
const avatarPopupLink = avatarEditPopup.querySelector(".popup__input_type_edit_avatar");
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
const promises = [getInitialProfil(), getInitialCards()]

Promise.all(promises)
.then((result) => {
  result[1].forEach((itemCard) =>
    placesContainer.append(
      createCard(itemCard, result[0], cardTemplate, likeCard, addContentCardPopup, openPopup, closePopup),
    ),
  );
})
  .catch((err) => {
    console.log(err);
  });

getInitialProfil()
  .then((result) => {
    profileTitle.textContent = result.name
    profileDescription.textContent = result.about
    profilAvatar.style.backgroundImage = `url('${result.avatar}')`
  })
  .catch((err) => {
    console.log(err);
  });


// getInitialCards()
//   .then((result) => {
//     result.forEach((itemCard) =>
//       placesContainer.append(
//         createCard(itemCard, cardTemplate, likeCard, addContentCardPopup, openPopup, closePopup),
//       ),
//     );
//   })
//   .catch((err) => {
//     console.log(err);
//   });

enableValidation(validationConfig); 

addCardButton.addEventListener("click", () => openPopup(popupNewCard));

profilEditButton.addEventListener("click", () => fillProfilePopup(profilEditPopup));

// Добавление информации из профиля в попап профиля
function fillProfilePopup(popup) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popup);
  clearValidation(popup, validationConfig)
}

//Редактирование профиля
function handleFormProfilEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  patchProfilEdit(nameInput, jobInput)
  closePopup(profilEditPopup);
}

profilEditPopup.addEventListener("submit", handleFormProfilEdit);

//Добавление новой карточки
function handleFormNewCard(evt) {
  evt.preventDefault();
  postCreatNewCard(newCardName, newCardUrl)
  .then((result) => {
    popupNewCard.querySelector('.button').textContent = 'Сохранение...';
    placesContainer.prepend(
      createCard(result, cardTemplate, likeCard, addContentCardPopup, openPopup, closePopup)
    )})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupNewCard.querySelector('.button').textContent = 'Сохраненить';
    });
        
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
};

//Попап редактирование аватара
profilAvatar.addEventListener("click", () => {
  openPopup(avatarEditPopup);
});

//Обновление аватара
function updateAvatar(evt){
  evt.preventDefault();
  patchUpdateAvatar(avatarPopupLink)
  .then(result => {
    avatarEditPopup.querySelector('.button').textContent = 'Сохранение...';
    profilAvatar.style.backgroundImage = `url('${result.avatar}')`;
  })
  .finally(() => {
    avatarEditPopup.querySelector('.button').textContent = 'Сохраненить';
  })
  closePopup(avatarEditPopup);
  document.forms["edit_avatar"].reset();
  enableValidation(validationConfig); 
};
avatarEditPopup.addEventListener("submit", updateAvatar);