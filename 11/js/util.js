function getRandomInt(min, max) {
  if (min < 0 || max <= min) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, digits) {
  if (min < 0 || max <= min) {
    return 0;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {getRandomInt, getRandomFloat, getRandomArrayElement};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {isEscapeKey};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div', { is : 'show-alert' });
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
  document.querySelector('.notice').append(massage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      massage.classList.add('hidden');
    }
  });
  document.addEventListener('click', () => {
    massage.classList.add('hidden');
  });

  const closeButton = typeMessageTamplate.querySelector(`.${messageType}__button`);
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      massage.classList.add('hidden');
    });
  }
};

export {showMessage};

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce};
