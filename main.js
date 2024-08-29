(()=>{"use strict";function e(e,t,n,r,o,c,a,i,u){var l=n.cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__delete-button"),p=l.querySelector(".card__like-button"),f=l.querySelector(".card__like-score"),_=l.querySelector(".card__title"),m=document.querySelector(".popup_type_delete-card");return _.textContent=e.name,s.src=e.link,s.alt=e.name,f.textContent=e.likes.length,s.addEventListener("click",(function(){return r(s.src,_.textContent)})),d.addEventListener("click",(function(){return(t={removeButton:d,deleteCardPopup:m,openPopup:o,closePopup:c,card:e,deleteCardInServer:a}).openPopup(t.deleteCardPopup),void(t.deleteCardPopup.onsubmit=function(e){return function(e,t){e.preventDefault(),t.deleteCardInServer(t.card._id).then((function(){t.closePopup(t.deleteCardPopup),t.removeButton.closest(".card").remove()})).catch((function(e){console.log(e)}))}(e,t)});var t})),p.addEventListener("click",(function(){return(t={likeButton:p,card:e,likeScore:f,putLikeScore:i,deleteLikeScore:u}).likeButton.classList.contains("card__like-button_is-active")||t.putLikeScore(t.card._id).then((function(e){t.likeScore.textContent=e.likes.length,t.likeButton.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})),void(t.likeButton.classList.contains("card__like-button_is-active")&&t.deleteLikeScore(t.card._id).then((function(e){t.likeScore.textContent=e.likes.length,t.likeButton.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})));var t})),e.owner._id!==t&&d.remove(),e.likes.forEach((function(e){e._id==t&&p.classList.toggle("card__like-button_is-active")})),l}function t(e){e.classList.add("popup_is-opened"),e.addEventListener("click",r),document.addEventListener("keydown",o)}function n(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",r),document.removeEventListener("keydown",o)}function r(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&n(e.currentTarget)}function o(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}var c=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="",t.setCustomValidity("")},a=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?c(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)},i=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},u=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){c(e,o,t),i(n,r,t)}))},l={baseUrl:"https://nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"}},s=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},d=function(e){return fetch("".concat(l.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:l.headers}).then(s)},p=function(e){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(e," "),{method:"PUT",headers:l.headers}).then(s)},f=function(e){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(e," "),{method:"DELETE",headers:l.headers}).then(s)};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m,v,y=document.querySelector("#card-template").content,h=document.querySelector(".places__list"),S=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_new-card"),k=document.querySelector(".profile__edit-button"),g=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup__input_type_name"),L=document.querySelector(".popup__input_type_description"),q=document.querySelector(".popup__input_type_card-name"),E=document.querySelector(".popup__input_type_url"),x=document.querySelector(".popup_type_image"),A=x.querySelector(".popup__image"),P=x.querySelector(".popup__caption"),B=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),w=document.querySelector(".profile__image"),T=document.querySelector(".popup_type_edit_avatar"),j=T.querySelector(".popup__input_type_edit_avatar"),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function O(e,t){t.querySelector(".button").textContent=!0===e?"Сохранение...":"Сохранить"}function D(e,n){A.src=e,P.textContent=n,A.alt=n,t(x)}Promise.all([fetch("".concat(l.baseUrl,"/users/me"),{headers:l.headers}).then(s),fetch("".concat(l.baseUrl,"/cards"),{headers:l.headers}).then(s)]).then((function(r){var o,c,a=(c=2,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(o,c)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(o,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];m=i._id,u.forEach((function(r){return h.append(e(r,m,y,D,t,n,d,p,f))})),B.textContent=i.name,U.textContent=i.about,w.style.backgroundImage="url('".concat(i.avatar,"')")})).catch((function(e){console.log(e)})),v=I,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);i(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){a(e,o,t),i(n,r,t)}))}))}(e,v)})),S.addEventListener("click",(function(){return t(b)})),k.addEventListener("click",(function(){return e=g,C.value=B.textContent,L.value=U.textContent,t(e),void u(e,I);var e})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),O(!0,g),(t={name:"".concat(C.value),about:"".concat(L.value)},fetch("".concat(l.baseUrl,"/users/me"),{method:"PATCH",headers:l.headers,body:JSON.stringify(t)}).then(s)).then((function(e){B.textContent=e.name,U.textContent=e.about,n(g)})).catch((function(e){console.log(e)})).finally((function(){O(!1,g)}))})),b.addEventListener("submit",(function(r){var o;r.preventDefault(),O(!0,b),(o={name:"".concat(q.value),link:"".concat(E.value)},fetch("".concat(l.baseUrl,"/cards"),{method:"POST",headers:l.headers,body:JSON.stringify(o)}).then(s)).then((function(r){h.prepend(e(r,m,y,D,t,n,d,p,f)),document.forms["new-place"].reset(),n(b),u(b,I)})).catch((function(e){console.log(e)})).finally((function(){O(!1,b)}))})),w.addEventListener("click",(function(){t(T)})),T.addEventListener("submit",(function(e){var t;e.preventDefault(),O(!0,T),(t={avatar:"".concat(j.value)},fetch("".concat(l.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:l.headers,body:JSON.stringify(t)}).then(s)).then((function(e){w.style.backgroundImage="url('".concat(e.avatar,"')"),n(T),document.forms.edit_avatar.reset(),u(T,I)})).catch((function(e){console.log(e)})).finally((function(){O(!1,T)}))}))})();