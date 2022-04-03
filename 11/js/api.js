import {showAlert} from './message.js';

const GET_DATA_ADDRESS = 'https://25.javascript.pages.academy/keksobooking/data';
const SEND_DATA_ADDRESS = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(GET_DATA_ADDRESS)
    .then((response) => response.json())
    .then((cards) => {
      onSuccess(cards);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные. Перезагрузите страницу');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_ADDRESS,
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
