!function(){var e={openModalBtn:document.querySelector("[data-modal-open-fr]"),closeModalBtn:document.querySelector("[data-modal-close-fr]"),modal:document.querySelector("[data-modal-fr]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("scroll-hidden"),window.addEventListener("keydown",n),window.addEventListener("click",d)}function n(o){e.modal.classList.contains("is-hidden")||"Escape"===o.code&&t()}function d(o){e.modal.classList.contains("is-hidden")||o.target===e.modal&&t()}function t(){o(),window.removeEventListener("keydown",n),window.removeEventListener("click",d)}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
//# sourceMappingURL=index.93c1c651.js.map