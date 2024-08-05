// Открытие и Закрытие Попапа
export function openPopup(open) {
    open.classList.add('popup_is-opened');
    const popup = document.querySelector('.page');

    popup.addEventListener('click', closedPopClick);
    popup.addEventListener('keydown', closedPopEsc);

  function closedPopClick(evt) {
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
      open.classList.remove('popup_is-opened');
      open.classList.add('popup_is-animated');
      popup.removeEventListener('keydown', closedPopEsc);
      popup.removeEventListener('click', closedPopClick);
    }
  };

  function closedPopEsc(evt) {
   if (evt.key === 'Escape') {
    open.classList.remove('popup_is-opened');
    open.classList.add('popup_is-animated');
    popup.removeEventListener('keydown', closedPopEsc);
    popup.removeEventListener('click', closedPopClick);
   }
  };
};