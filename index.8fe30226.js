!function(){var e={openModalBtn:document.querySelector("[data-modal-open-fr]"),closeModalBtn:document.querySelector("[data-modal-close-fr]"),modal:document.querySelector("[data-modal-fr]"),body:document.querySelector("body")};function n(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("scroll-hidden"),window.addEventListener("keydown",t),window.addEventListener("click",o)}function t(n){e.modal.classList.contains("is-hidden")||"Escape"===n.code&&d()}function o(n){e.modal.classList.contains("is-hidden")||n.target===e.modal&&d()}function d(){n(),window.removeEventListener("keydown",t),window.removeEventListener("click",o)}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n),document.querySelector(".modal-fr__form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,o=t.name,d=t.phone,a=t.email,l=t.comment,c={name:o.value,phone:d.value,email:a.value,comment:l.value};return e.currentTarget.reset(),n(),c}))}();
//# sourceMappingURL=index.8fe30226.js.map