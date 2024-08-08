import {cardTemplate} from '../index.js';
import {openPopup} from './modal.js';

// Создание крточки
export function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const removeButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const popupCard = document.querySelector('.popup_type_image');
  const likeButton = cardElement.querySelector('.card__like-button');
  const imagePopup = popupCard.querySelector('.popup__image');
  const captiomPopup = popupCard.querySelector('.popup__caption');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  removeButton.addEventListener('click', () => deleteCard(removeButton));
  cardImage.addEventListener('click', () => addImgPopup(popupCard, imagePopup, captiomPopup, card.link, card.name));
  likeButton.addEventListener('click', () => likeButton.classList.toggle('card__like-button_is-active'))
  
  return cardElement;
}

//Удаление карточки
function deleteCard(deleteItem) {
    const deleteCardItem = deleteItem.closest('.card');
    deleteCardItem.remove(); 
    }

// Попап карточки    
function addImgPopup(popup, image, captiom, link, name) {
    console.log();
    image.src = link;
    captiom.textContent = name;
    openPopup(popup)
}