(() => {
    const refs = {
      openModalfrBtn: document.querySelector("[data-modal-open-fr]"),
      closeModalfrBtn: document.querySelector("[data-modal-close-fr]"),
      modalfr: document.querySelector("[data-modal-fr]"),
    };
  
    refs.openModalfrBtn.addEventListener("click", toggleModal);
    refs.closeModalfrBtn.addEventListener("click", toggleModal);
  
    function toggleModalfr() {
      refs.modalfr.classList.toggle("is-hidden");
    }
  })();