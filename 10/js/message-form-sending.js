import {isEscapeKey} from './util.js';

const successMessageTamplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTamplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessageTamplate.querySelector('.error__button');

const showSuccsessMessage = () => {
  const successMessage = successMessageTamplate.cloneNode(true);

  document.querySelector('.notice').append(successMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    successMessage.classList.add('hidden');
  });
};

export{showSuccsessMessage};

const showErrorMessage = () => {
  const errorMessage = errorMessageTamplate.cloneNode(true);

  document.querySelector('.notice').append(errorMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });

  errorButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
};

export{showErrorMessage};
