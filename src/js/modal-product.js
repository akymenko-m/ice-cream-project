(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-modal-open]'),
    openModalBtn2: document.querySelector('[data-product-modal-open2]'),
    openModalBtn3: document.querySelector('[data-product-modal-open3]'),
    closeModalBtn: document.querySelector('[data-product-modal-close]'),
    modal: document.querySelector('[data-product-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
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
  const productForm = document.querySelector('.product-modal-form');

  productForm.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { name, phone, comment },
    } = event.currentTarget;

    const clientRequest = {
      name: name.value,
      phone: phone.value,
      comment: comment.value,
    };

    event.currentTarget.reset();
    toggleModal();

    return clientRequest;
  }
})();
