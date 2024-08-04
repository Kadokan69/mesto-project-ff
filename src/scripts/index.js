import {initialCards} from '../scripts/cards.js';
const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');

    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = card.name;
    
    removeButton.addEventListener('click', () => deleteCard(removeButton));
    
    return cardElement;
  }

function deleteCard(deleteItem) {
      const deleteCardItem = deleteItem.closest('.card');
      deleteCardItem.remove(); 
      }

initialCards.forEach((itemCard) => placesContainer.append(createCard(itemCard)));