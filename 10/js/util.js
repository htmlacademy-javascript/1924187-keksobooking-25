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
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};
