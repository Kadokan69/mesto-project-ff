// Открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", eventClickListener);
  document.addEventListener("keydown", eventEscListener);
}

//Закрытие попапа
export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", eventClickListener);
  document.removeEventListener("keydown", eventEscListener);
}

function eventClickListener(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target.classList.contains("popup")
  ) {
    document
      .querySelectorAll(".popup_is-opened")
      .forEach((openPopup) => closePopup(openPopup));
  }
}
function eventEscListener(evt) {
  if (evt.key === "Escape") {
    document
      .querySelectorAll(".popup_is-opened")
      .forEach((openPopup) => closePopup(openPopup));
  }
}
