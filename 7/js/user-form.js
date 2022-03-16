const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('[name="rooms"]');
const capacityNumber = form.querySelector('[name="capacity"]');
const houseroomTypes = form.querySelector('[name="type"]');
const price = form.querySelector('[name="price"]');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
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

const ErrorMassagePrice = () => `Минимальная цена ${price.min}`;

function minPriceValidation () {
  if (price.value >= price.min) {
    return true;
  } else {
    return false;
  }
}

pristine.addValidator(price, minPriceValidation, ErrorMassagePrice);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    window.console.log('Можно отправлять');
  } else {
    window.console.log('Форма невалидна');
  }
});
