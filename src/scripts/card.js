import {cardTemplate} from '../index.js';
import {openPopup} from './popup.js';
export{createCard, deleteCard}

// Создание крточки
function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const removeButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const popupImage = document.querySelector('.popup_type_image');
  const cardPopup = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  const imagePopup = popupImage.querySelector('.popup__image');
  const captiomPopup = popupImage.querySelector('.popup__caption');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  removeButton.addEventListener('click', () => deleteCard(removeButton));
  cardPopup.addEventListener('click', () => imgPopup(popupImage, imagePopup, captiomPopup, card.link, card.name));
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_is-active'))
  
  return cardElement;
}

//Удаление карточки
function deleteCard(deleteItem) {
    const deleteCardItem = deleteItem.closest('.card');
    deleteCardItem.remove(); 
    }

// Попап карточки    
function imgPopup(open, image, captiom, link, name) {
    console.log();
    image.src = link;
    captiom.textContent = name;
    openPopup(open)
}