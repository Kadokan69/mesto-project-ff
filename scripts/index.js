// @todo: Темплейт карточки - initialCards

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
  
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    
    removeButton.addEventListener('click', function() {
        const deleteElementCard = removeButton.closest('.card');
            deleteElementCard.remove();
        })

    placesList.append(cardElement); 
  }

initialCards.forEach(createCard);