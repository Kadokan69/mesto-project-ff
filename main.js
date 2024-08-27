(()=>{"use strict";function e(e,t,n,r,o,c,a,u,i){var l=n.cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__delete-button"),p=l.querySelector(".card__like-button"),f=l.querySelector(".card__like-score"),_=l.querySelector(".card__title"),m=document.querySelector(".popup_type_delete-card");return _.textContent=e.name,s.src=e.link,s.alt=e.name,f.textContent=e.likes.length,s.addEventListener("click",(function(){return r(s.src,_.textContent)})),d.addEventListener("click",(function(){return function(e,t,n,r,o,c){n(t),document.getElementById("popup__button-delete-card").addEventListener("click",(function(){var n=e.closest(".card");c(o._id),n.remove(),r(t)}),{once:!0})}(d,m,o,c,e,a)})),p.addEventListener("click",(function(){return function(e,t,n,r,o){e.classList.toggle("card__like-button_is-active"),e.classList.contains("card__like-button_is-active")?r(t._id).then((function(e){n.textContent=e.likes.length})):o(t._id).then((function(e){n.textContent=e.likes.length}))}(p,e,f,u,i)})),e.owner._id!==t._id&&d.remove(),e.likes.forEach((function(e){e._id==t._id&&p.classList.toggle("card__like-button_is-active")})),l}function t(e){e.classList.add("popup_is-opened"),e.addEventListener("click",r),document.addEventListener("keydown",o)}function n(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",r),document.removeEventListener("keydown",o)}function r(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&n(e.currentTarget)}function o(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}var c=function(e){var t=function(t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(n.disabled=!1,n.classList.remove(e.inactiveButtonClass)):(n.disabled=!0,n.classList.add(e.inactiveButtonClass))},n=function(t,n,r){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),o.textContent=r,o.classList.add(e.errorClass)},r=function(t,n){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),r.classList.remove(e.errorClass),r.textContent=""};Array.from(document.querySelectorAll(e.formSelector)).forEach((function(o){!function(o){var c=Array.from(o.querySelectorAll(e.inputSelector)),a=o.querySelector(e.submitButtonSelector);t(c,a),c.forEach((function(e){e.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?r(e,t):n(e,t,t.validationMessage)})(o,e),t(c,a)}))}))}(o)}))},a={baseUrl:"https://nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"a8ed8923-c1b8-4d93-ac19-168eae7fcf29","Content-Type":"application/json"}},u=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},i=function(){return fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(u)},l=function(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a.headers})},s=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e," "),{method:"PUT",headers:a.headers}).then(u)},d=function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e," "),{method:"DELETE",headers:a.headers}).then(u)};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector("#card-template").content,m=document.querySelector(".places__list"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup__input_type_name"),q=document.querySelector(".popup__input_type_description"),C=document.querySelector(".popup__input_type_card-name"),E=document.querySelector(".popup__input_type_url"),g=document.querySelector(".popup_type_image"),L=g.querySelector(".popup__image"),k=g.querySelector(".popup__caption"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),U=document.querySelector(".profile__image"),w=document.querySelector(".popup_type_edit_avatar"),T=w.querySelector(".popup__input_type_edit_avatar"),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function j(e,n){L.src=e,k.textContent=n,L.alt=n,t(g)}Promise.all([i(),fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(u)]).then((function(r){var o=p(r,2),c=o[0];o[1].forEach((function(r){return m.append(e(r,c,_,j,t,n,l,s,d))})),x.textContent=c.name,A.textContent=c.about,U.style.backgroundImage="url('".concat(c.avatar,"')")})).catch((function(e){console.log(e)})),c(B),y.addEventListener("click",(function(){return t(v)})),h.addEventListener("click",(function(){return e=S,b.value=x.textContent,q.value=A.textContent,t(e),void function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){var o=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),o.classList.remove(t.inputErrorClass),o.textContent="",n.validity.valid&&(r.disabled=!1,r.classList.remove(t.inactiveButtonClass))}))}(e,B);var e})),S.addEventListener("submit",(function(e){var t;e.preventDefault(),S.querySelector(".button").textContent="Сохранение...",(t={name:"".concat(b.value),about:"".concat(q.value)},fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify(t)}).then(u)).then((function(e){x.textContent=e.name,A.textContent=e.about,n(S)})).catch((function(e){console.log(e)})).finally((function(){S.querySelector(".button").textContent="Сохранить"}))})),v.addEventListener("submit",(function(r){var o;r.preventDefault(),v.querySelector(".button").textContent="Сохранение...",Promise.all([i(),(o={name:"".concat(C.value),link:"".concat(E.value)},fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify(o)}).then(u))]).then((function(r){var o=p(r,2),a=o[0],u=o[1];m.prepend(e(u,a,_,j,t,n,l,s,d)),document.forms["new-place"].reset(),n(v),c(B)})).catch((function(e){console.log(e)})).finally((function(){v.querySelector(".button").textContent="Сохранить"}))})),U.addEventListener("click",(function(){t(w)})),w.addEventListener("submit",(function(e){var t;e.preventDefault(),w.querySelector(".button").textContent="Сохранение...",(t={avatar:"".concat(T.value)},fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify(t)}).then(u)).then((function(e){U.style.backgroundImage="url('".concat(e.avatar,"')"),n(w),document.forms.edit_avatar.reset(),c(B)})).finally((function(){w.querySelector(".button").textContent="Сохраненить"}))}))})();