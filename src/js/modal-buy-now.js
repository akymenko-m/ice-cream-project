(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-open]"),
    openModalBtnM: document.querySelector("[data-modal-buy-mobile-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnM.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();