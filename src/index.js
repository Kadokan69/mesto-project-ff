export {cardTemplate, page}
import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard} from './scripts/card.js';
import {openPopup} from './scripts/modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');
const page = document.querySelector('.page');
const addCardButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const profilEditButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const newCardName = document.querySelector('.popup__input_type_card-name');
const newCardUrl = document.querySelector('.popup__input_type_url');

initialCards.forEach((itemCard) => placesContainer.append(createCard(itemCard)));

addCardButton.addEventListener('click', () => openPopup(popupNewCard));

profilEditButton.addEventListener('click', () => openPopup(formElement));

//Редактирование профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); 
      document.querySelector('.profile__title').textContent = nameInput.value;
      document.querySelector('.profile__description').textContent = jobInput.value
      nameInput.value = '';
      jobInput.value = '';
      formElement.classList.remove('popup_is-opened');
}

formElement.addEventListener('submit', handleFormSubmit);

//Добавление новой краточки
function handleFormNewCard(evt) {
  evt.preventDefault(); 
  const newCard = {name:newCardName.value, link:newCardUrl.value};
  placesContainer.prepend(createCard(newCard))
  newCardName.value = '';
  newCardUrl.value = '';
  popupNewCard.classList.remove('popup_is-opened');
};

popupNewCard.addEventListener('submit', handleFormNewCard);

