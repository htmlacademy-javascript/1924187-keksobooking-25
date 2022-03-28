import {renderCards} from './map.js';
import {showAlert} from './util.js';

const SIMILAR_ADVERTISEMENT_COUNT = 10;

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные. Перезагрузите страницу');
    });
};

getData((cards) => {
  renderCards(cards.slice(0, SIMILAR_ADVERTISEMENT_COUNT));
});

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
