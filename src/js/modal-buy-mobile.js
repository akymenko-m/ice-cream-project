(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-mobile-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-mobile-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
