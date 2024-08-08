// Открытие и Закрытие Попапа
import {popup} from './../index.js'
export function openPopup(open, imagePopup, captiomPopup, link, name) {
    open.classList.add('popup_is-opened');
    popup.addEventListener('click', eventListener);
    popup.addEventListener('keydown', eventListener);
  };
export function closedPopup() {
    document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
    popup.removeEventListener('click', eventListener);
    popup.removeEventListener('keydown', eventListener);
    };

    function eventListener(evt) {
      if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup') || evt.key === 'Escape'){
        closedPopup();
     };
    }