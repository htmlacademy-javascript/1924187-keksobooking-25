import {resetMap} from './map.js';
import {showMessage} from './message.js';
import {resetSlider} from './price-slider.js';
import {sendData} from './api.js';
import {removeFile, avatarPreview, housingPreview} from './avatar.js';

const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('[name="rooms"]');
const capacityNumber = form.querySelector('[name="capacity"]');
const houseroomTypes = form.querySelector('[name="type"]');
const price = form.querySelector('[name="price"]');
const timeCheckin = form.querySelector('[name="timein"]');
const timeCheckout = form.querySelector('[name="timeout"]');
const resetButton = document.querySelector('[type="reset"]');
const submitButton = document.querySelector('[type="submit"]');
const mapFiltersForm = document.querySelector('.map__filters');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'validation-text',
  errorTextParent: 'ad-form__element',
});

const roomForCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const houseroomMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

function capacityValidation () {
  return roomForCapacity[roomNumber.value].includes(capacityNumber.value);
}

pristine.addValidator(capacityNumber, capacityValidation, 'Колличество гостей не может превышать количество комнат');

function setMinPriceAttr () {
  price.min = houseroomMinPrice[houseroomTypes.value];
  price.placeholder = houseroomMinPrice[houseroomTypes.value];
}

houseroomTypes.addEventListener('change', setMinPriceAttr);

const ErrorMessagePrice = () => `Минимальная цена ${price.min}`;

function minPriceValidation () {
  return Number(price.value) >= Number(price.min);
}

pristine.addValidator(price, minPriceValidation, ErrorMessagePrice);

function onSelectTimeIn (evt) {
  timeCheckin.value = evt.target.value;
}

function onSelectTimeOut (evt) {
  timeCheckout.value = evt.target.value;
}

timeCheckin.addEventListener('change', onSelectTimeOut);
timeCheckout.addEventListener('change', onSelectTimeIn);

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();

    sendData(
      () => {
        form.reset();
        resetMap();
        showMessage('success');
        unblockSubmitButton();
        resetSlider();
        mapFiltersForm.reset();
        removeFile(avatarPreview, housingPreview);
      },
      () => {
        showMessage('error');
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  form.reset();
  mapFiltersForm.reset();
  resetMap();
  resetSlider();
  removeFile(avatarPreview, housingPreview);
});
