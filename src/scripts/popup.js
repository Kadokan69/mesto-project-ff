// Открытие и Закрытие Попапа
export function openPopup(open) {
    open.classList.add('popup_is-opened');
    const popup = document.querySelector('.page');

    popup.addEventListener('click', closedPop);
    popup.addEventListener('keydown', closedPop);

  function closedPop(evt) {
    if (evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup') || evt.key === 'Escape') {
      console.log(evt);
      open.classList.remove('popup_is-opened');
      open.classList.add('popup_is-animated');
      
      popup.removeEventListener('keydown', closedPop);
      popup.removeEventListener('click', closedPop);
      
    };
    
    };
  };