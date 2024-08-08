// Открытие попапа
import {page} from '../index.js'
export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    page.addEventListener('click', eventListener);
    page.addEventListener('keydown', eventListener);
  };


//Закрытие попапа
function closePopup() {
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
    page.removeEventListener('click', eventListener);
    page.removeEventListener('keydown', eventListener);
    };
    
function eventListener(evt) {
      if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup') || evt.key === 'Escape'){
        closePopup();
     };
    }