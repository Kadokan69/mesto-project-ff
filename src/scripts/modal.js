export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", eventClickListener);
  document.addEventListener("keydown", eventEscListener);
}

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
    closePopup(evt.currentTarget);
  }
}
function eventEscListener(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
