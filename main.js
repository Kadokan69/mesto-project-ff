(()=>{"use strict";function e(e,t,o,n,r,c){var a=t.cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),l=a.querySelector(".card__like-score"),d=a.querySelector(".card__title"),p=document.querySelector(".popup_type_delete-card");return d.textContent=e.name,i.src=e.link,i.alt=e.name,l.textContent=e.likes.length,i.addEventListener("click",(function(){return n(i.src,d.textContent)})),u.addEventListener("click",(function(){return function(e,t,o,n,r){o(t),document.getElementById("popup__button-delete-card").addEventListener("click",(function(){console.log(r._id),fetch("https://nomoreparties.co/v1/wff-cohort-21/cards/".concat(r._id," "),{method:"DELETE",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29"}}),e.closest(".card").remove(),n(t)}),{once:!0})}(u,p,r,c,e)})),s.addEventListener("click",(function(){return o(s,e,l)})),"8e978d0da67fdc629650fdb2"!==e.owner._id&&u.remove(),e.likes.forEach((function(e){"8e978d0da67fdc629650fdb2"===e._id&&s.classList.toggle("card__like-button_is-active")})),a}function t(e,t,o){e.classList.toggle("card__like-button_is-active"),e.classList.contains("card__like-button_is-active")?fetch("https://nomoreparties.co/v1/wff-cohort-21/cards/likes/".concat(t._id," "),{method:"PUT",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){o.textContent=e.likes.length})):fetch("https://nomoreparties.co/v1/wff-cohort-21/cards/likes/".concat(t._id," "),{method:"DELETE",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){o.textContent=e.likes.length}))}function o(e){e.classList.add("popup_is-opened"),e.addEventListener("click",r),document.addEventListener("keydown",c)}function n(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",r),document.removeEventListener("keydown",c)}function r(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&n(e.currentTarget)}function c(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}var a=function(e){var t=function(t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(o.disabled=!1,o.classList.remove(e.inactiveButtonClass)):(o.disabled=!0,o.classList.add(e.inactiveButtonClass))},o=function(t,o,n){var r=t.querySelector(".".concat(o.id,"-error"));o.classList.add(e.inputErrorClass),r.textContent=n,r.classList.add(e.errorClass)},n=function(t,o){var n=t.querySelector(".".concat(o.id,"-error"));o.classList.remove(e.inputErrorClass),n.classList.remove(e.errorClass),n.textContent=""};Array.from(document.querySelectorAll(e.formSelector)).forEach((function(r){!function(r){var c=Array.from(r.querySelectorAll(e.inputSelector)),a=r.querySelector(e.submitButtonSelector);t(c,a),c.forEach((function(e){e.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?n(e,t):o(e,t,t.validationMessage)})(r,e),t(c,a)}))}))}(r)}))},i={baseUrl:"https://nomoreparties.co/v1/wff-cohort-21",method:"GET",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"}},u=document.querySelector("#card-template").content,s=document.querySelector(".places__list"),l=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_type_new-card"),p=document.querySelector(".profile__edit-button"),f=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup__input_type_name"),m=document.querySelector(".popup__input_type_description"),v=document.querySelector(".popup__input_type_card-name"),y=document.querySelector(".popup__input_type_url"),h=document.querySelector(".popup_type_image"),S=h.querySelector(".popup__image"),b=h.querySelector(".popup__caption"),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function C(e,t){S.src=e,b.textContent=t,S.alt=t,o(h)}fetch("".concat(i.baseUrl,"/users/me"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){document.querySelector(".profile__title").textContent=e.name,document.querySelector(".profile__description").textContent=e.about,document.querySelector(".profile__image").style.backgroundImage="url('".concat(e.avatar,"')")})).catch((function(e){console.log(e)})),fetch("".concat(i.baseUrl,"/cards"),{headers:i.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(r){r.forEach((function(r){return s.append(e(r,u,t,C,o,n))}))})).catch((function(e){console.log(e)})),a(q),l.addEventListener("click",(function(){return o(d)})),p.addEventListener("click",(function(){return e=f,_.value=document.querySelector(".profile__title").textContent,m.value=document.querySelector(".profile__description").textContent,o(e),void function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);o.forEach((function(o){var r=e.querySelector(".".concat(o.id,"-error"));o.classList.remove(t.inputErrorClass),r.classList.remove(t.inputErrorClass),r.textContent="",o.validity.valid&&(n.disabled=!1,n.classList.remove(t.inactiveButtonClass))}))}(e,q);var e})),f.addEventListener("submit",(function(e){e.preventDefault(),document.querySelector(".profile__title").textContent=_.value,document.querySelector(".profile__description").textContent=m.value,fetch("https://nomoreparties.co/v1/wff-cohort-21/users/me",{method:"PATCH",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(_.value),about:"".concat(m.value)})}),n(f)})),d.addEventListener("submit",(function(r){r.preventDefault(),fetch("https://nomoreparties.co/v1/wff-cohort-21/cards ",{method:"POST",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(v.value),link:"".concat(y.value)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(r){s.prepend(e(r,u,t,C,o,n))})).catch((function(e){console.log(e)})),document.forms["new-place"].reset(),n(d),a(q)}))})();