import {resetMap} from './map.js';
import {showMessage} from './message.js';
import {resetSlider} from './price-slider.js';
import {sendData} from './api.js';
import {removeFile, avatarPreviewElement, housingPreviewElement} from './photo-files.js';

const form = document.querySelector('.ad-form');
const roomNumberElement = form.querySelector('[name="rooms"]');
const capacityNumberElement = form.querySelector('[name="capacity"]');
const houseroomTypesElement = form.querySelector('[name="type"]');
const priceElement = form.querySelector('[name="price"]');
const timeCheckinElement = form.querySelector('[name="timein"]');
const timeCheckoutElement = form.querySelector('[name="timeout"]');
const resetButton = document.querySelector('[type="reset"]');
const submitButton = document.querySelector('[type="submit"]');
const mapFiltersForm = document.querySelector('.map__filters');

export {form, mapFiltersForm};

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

const addCapacityValidation = () => roomForCapacity[roomNumberElement.value].includes(capacityNumberElement.value);

pristine.addValidator(capacityNumberElement, addCapacityValidation, 'Колличество гостей не может превышать количество комнат');

const setMinPriceAttr = () => {
  priceElement.min = houseroomMinPrice[houseroomTypesElement.value];
  priceElement.placeholder = houseroomMinPrice[houseroomTypesElement.value];
};

houseroomTypesElement.addEventListener('change', setMinPriceAttr);

const addErrorMessagePrice = () => `Минимальная цена ${priceElement.min}`;

const addMinPriceValidation = () => Number(priceElement.value) >= Number(priceElement.min);

pristine.addValidator(priceElement, addMinPriceValidation, addErrorMessagePrice);

const onSelectTimeIn = (evt) => {
  timeCheckinElement.value = evt.target.value;
};

const onSelectTimeOut = (evt) => {
  timeCheckoutElement.value = evt.target.value;
};

timeCheckinElement.addEventListener('change', onSelectTimeOut);
timeCheckoutElement.addEventListener('change', onSelectTimeIn);

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
        removeFile(avatarPreviewElement, housingPreviewElement);
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
  removeFile(avatarPreviewElement, housingPreviewElement);
});
