export {cardTemplate, placesContainer,popup}
import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard} from './scripts/card.js';
import {openPopup} from './scripts/popup.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');
const popup = document.querySelector('.page');

//Попап добавления новой карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');

//Попап редактирования профиля
const popupEdit = document.querySelector('.popup_type_edit');
const profilEditButton = document.querySelector('.profile__edit-button');

//Редактирование Профиля
const formElement = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

//Создание новой карточки
const newCardName = document.querySelector('.popup__input_type_card-name');
const newCardUrl = document.querySelector('.popup__input_type_url');


initialCards.forEach((itemCard) => placesContainer.append(createCard(itemCard)));


profilEditButton.addEventListener('click', () => openPopup(popupEdit));


addCardButton.addEventListener('click', () => openPopup(popupNewCard));


function handleFormSubmit(evt) {
    evt.preventDefault(); 
      document.querySelector('.profile__title').textContent = nameInput.value;
      document.querySelector('.profile__description').textContent = jobInput.value
      nameInput.value = '';
      jobInput.value = '';
    popupEdit.classList.remove('popup_is-opened');
}

formElement.addEventListener('submit', handleFormSubmit);


function newCardForm(evt) {
  evt.preventDefault(); 
  const newCard = {name:newCardName.value, link:newCardUrl.value};
  placesContainer.prepend(createCard(newCard))
  newCardName.value = '';
  newCardUrl.value = '';
  popupNewCard.classList.remove('popup_is-opened');
};

popupNewCard.addEventListener('submit', newCardForm);

