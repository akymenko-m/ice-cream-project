!function(){var e={openModalBtn:document.querySelector("[data-modal-buy-now-open]"),openModalBtnM:document.querySelector("[data-modal-buy-mobile-open]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]"),body:document.querySelector("body")};function n(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("scroll-hidden"),window.addEventListener("keydown",o),window.addEventListener("click",t)}function o(n){e.modal.classList.contains("is-hidden")||"Escape"===n.code&&d()}function t(n){e.modal.classList.contains("is-hidden")||n.target===e.modal&&d()}function d(){n(),window.removeEventListener("keydown",o),window.removeEventListener("click",t)}e.openModalBtn.addEventListener("click",n),e.openModalBtnM.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n),document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var o=e.currentTarget.elements,t=o.name,d=o.phone,a=o.comment,c={name:t.value,phone:d.value,comment:a.value};return e.currentTarget.reset(),n(),c}))}();
//# sourceMappingURL=index.3c60833f.js.map
