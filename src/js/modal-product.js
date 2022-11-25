(() => {
  const refs = {
    openModalBtn: document.querySelector("[product-data-modal-open]"),
    openModalBtn2: document.querySelector("[product-data-modal-open2]"),
    openModalBtn3: document.querySelector("[product-data-modal-open3]"),
    closeModalBtn: document.querySelector("[product-data-modal-close]"),
    modal: document.querySelector("[product-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();