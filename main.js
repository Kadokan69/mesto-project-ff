(()=>{"use strict";function e(e,t,o,n,r){var c=t.cloneNode(!0),i=c.querySelector(".card__image"),u=c.querySelector(".card__delete-button"),a=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-score"),l=c.querySelector(".card__title");return l.textContent=e.name,i.src=e.link,i.alt=e.name,s.textContent=e.likes.length,i.addEventListener("click",(function(){return r(i.src,l.textContent)})),u.addEventListener("click",(function(){return o(u)})),a.addEventListener("click",(function(){return n(a)})),c}function t(e){e.closest(".card").remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function n(e){e.classList.add("popup_is-opened"),e.addEventListener("click",c),document.addEventListener("keydown",i)}function r(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",c),document.removeEventListener("keydown",i)}function c(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&r(e.currentTarget)}function i(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var u=function(e){var t=function(t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(o.disabled=!1,o.classList.remove(e.inactiveButtonClass)):(o.disabled=!0,o.classList.add(e.inactiveButtonClass))},o=function(t,o,n){var r=t.querySelector(".".concat(o.id,"-error"));o.classList.add(e.inputErrorClass),r.textContent=n,r.classList.add(e.errorClass)},n=function(t,o){var n=t.querySelector(".".concat(o.id,"-error"));o.classList.remove(e.inputErrorClass),n.classList.remove(e.errorClass),n.textContent=""};Array.from(document.querySelectorAll(e.formSelector)).forEach((function(r){!function(r){var c=Array.from(r.querySelectorAll(e.inputSelector)),i=r.querySelector(e.submitButtonSelector);t(c,i),c.forEach((function(e){e.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?n(e,t):o(e,t,t.validationMessage)})(r,e),t(c,i)}))}))}(r)}))},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-21",method:"GET",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"}},s=function(){return fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},l=document.querySelector("#card-template").content,p=document.querySelector(".places__list"),d=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_new-card"),f=document.querySelector(".profile__edit-button"),m=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup__input_type_name"),v=document.querySelector(".popup__input_type_description"),S=document.querySelector(".popup__input_type_card-name"),h=document.querySelector(".popup__input_type_url"),q=document.querySelector(".popup_type_image"),C=q.querySelector(".popup__image"),b=q.querySelector(".popup__caption"),L=(document.querySelector(".popup_type_delete-card"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"});function E(e,t){C.src=e,b.textContent=t,C.alt=t,n(q)}fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){document.querySelector(".profile__title").textContent=e.name,document.querySelector(".profile__description").textContent=e.about,document.querySelector(".profile__image").style.backgroundImage="url('".concat(e.avatar,"')")})).catch((function(e){console.log(e)})),s().then((function(n){n.forEach((function(n){return p.append(e(n,l,t,o,E))}))})).catch((function(e){console.log(e)})),u(L),d.addEventListener("click",(function(){return n(_)})),f.addEventListener("click",(function(){return e=m,y.value=document.querySelector(".profile__title").textContent,v.value=document.querySelector(".profile__description").textContent,n(e),void function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);o.forEach((function(o){var r=e.querySelector(".".concat(o.id,"-error"));o.classList.remove(t.inputErrorClass),r.classList.remove(t.inputErrorClass),r.textContent="",o.validity.valid&&(n.disabled=!1,n.classList.remove(t.inactiveButtonClass))}))}(e,L);var e})),m.addEventListener("submit",(function(e){e.preventDefault(),document.querySelector(".profile__title").textContent=y.value,document.querySelector(".profile__description").textContent=v.value,fetch("https://nomoreparties.co/v1/wff-cohort-21/users/me",{method:"PATCH",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(y.value),about:"".concat(v.value)})}),r(m)})),_.addEventListener("submit",(function(n){n.preventDefault(),fetch("https://nomoreparties.co/v1/wff-cohort-21/cards ",{method:"POST",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(S.value),link:"".concat(h.value)})}),s().then((function(n){n.forEach((function(n){return p.append(e(n,l,t,o,E))}))})).catch((function(e){console.log(e)})),document.forms["new-place"].reset(),r(_),u(L)}))})();