(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-fr]'),
    closeModalBtn: document.querySelector('[data-modal-close-fr]'),
    modal: document.querySelector('[data-modal-fr]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('scroll-hidden');

    window.addEventListener('keydown', onKeyClick);
    window.addEventListener('click', onCloseModalbyBackdrop);
  }

  function onKeyClick(event) {
    if (refs.modal.classList.contains('is-hidden')) {
      return;
    }
    if (event.code !== 'Escape') {
      return;
    }

    modalSettings();
  }

  function onCloseModalbyBackdrop(event) {
    if (refs.modal.classList.contains('is-hidden')) {
      return;
    }
    if (event.target === refs.modal) {
      modalSettings();
    }
  }

  function modalSettings() {
    toggleModal();
    clearBackdropListeners();
  }

  function clearBackdropListeners() {
    window.removeEventListener('keydown', onKeyClick);
    window.removeEventListener('click', onCloseModalbyBackdrop);
  }

  //form submit
  const franchiseForm = document.querySelector('.modal-fr__form');

  franchiseForm.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { name, phone, email, comment },
    } = event.currentTarget;

    const clientRequest = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      comment: comment.value,
    };

    event.currentTarget.reset();
    toggleModal();

    return clientRequest;
  }
})();
