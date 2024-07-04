// @todo: Темплейт карточки - initialCards

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.querySelector('.card');
const cardTitle = cardElement.querySelector('.card__title');
const cardImage = cardElement.querySelector('.card__image');
const placesList = document.querySelector('.places__list');





function createCard(card) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const removeButton = cardElement.querySelector('.card__delete-button');
  
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').setAttribute('src', card.link);
    
    removeButton.addEventListener('click', deleteCard);
    
    placesList.append(cardElement);
    console.log(cardElement);

    return cardElement;
  };



function deleteCard(){
    // const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        cardElement.remove();
        console.log("cardElement");
    };
    

initialCards.forEach(createCard);