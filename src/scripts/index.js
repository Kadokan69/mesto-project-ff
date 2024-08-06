import {initialCards} from '../scripts/cards.js';
import {openPopup} from '../scripts/popup.js'

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');


function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');
    const popupImage = document.querySelector('.popup_type_image');
    const cardPopup = cardElement.querySelector('.card');
    
    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;
    
    removeButton.addEventListener('click', () => deleteCard(removeButton));
    cardPopup.addEventListener('click', () => openPopup(popupImage));
    
    return cardElement;
  }

function deleteCard(deleteItem) {
      const deleteCardItem = deleteItem.closest('.card');
      deleteCardItem.remove(); 
      }

initialCards.forEach((itemCard) => placesContainer.append(createCard(itemCard)));

//Попап редактирования профиля
const popupEdit = document.querySelector('.popup_type_edit');
const profilEditButton = document.querySelector('.profile__edit-button');

profilEditButton.addEventListener('click', () => openPopup(popupEdit));


//Попап добавления новой карточки
const addCardButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');

addCardButton.addEventListener('click', () => openPopup(popupNewCard));

//Редактирование Профиля
const formElement = document.querySelector('.popup_type_edit');// Воспользуйтесь методом querySelector()
const nameInput = document.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()

function handleFormSubmit(evt) {
    evt.preventDefault(); 
      document.querySelector('.profile__title').textContent = nameInput.value;
      document.querySelector('.profile__description').textContent = jobInput.value
      nameInput.value = '';
      jobInput.value = '';
    popupEdit.classList.remove('popup_is-opened');
    popupEdit.classList.add('popup_is-animated');

}

formElement.addEventListener('submit', handleFormSubmit);

const newCardName = document.querySelector('.popup__input_type_card-name');
const newCardUrl = document.querySelector('.popup__input_type_url');

function newCardForem(evt) {
  evt.preventDefault(); 
  let newCard = {name:newCardName.value, link:newCardUrl.value};
  placesContainer.prepend(createCard(newCard))
  popupNewCard.classList.remove('popup_is-opened');
  popupNewCard.classList.add('popup_is-animated');
  newCardName.value = '';
  newCardUrl.value = '';
};

popupNewCard.addEventListener('submit', newCardForem);