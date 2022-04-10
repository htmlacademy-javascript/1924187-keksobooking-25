const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('show-alert');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};

const showMessage = (messageType) => {
  const typeMessageTamplate = document.querySelector(`#${messageType}`).content.querySelector(`.${messageType}`);
  const massage = typeMessageTamplate.cloneNode(true);
  const closeButton = typeMessageTamplate.querySelector(`.${messageType}__button`);
  document.querySelector('.notice').append(massage);

  const onDocumentClose = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
    }
    massage.classList.add('hidden');
    document.removeEventListener('click', onDocumentClose);
    document.removeEventListener('keydown', onDocumentClose);
  };

  const onButtonClose = () => {
    onDocumentClose();
    closeButton.removeEventListener('click', onButtonClose);
  };

  document.addEventListener('keydown', onDocumentClose);
  document.addEventListener('click', onDocumentClose);

  if (closeButton) {
    closeButton.addEventListener('click', onButtonClose);
  }
};

export {showMessage};
