const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('[name="rooms"]');
const capacityNumber = form.querySelector('[name="capacity"]');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const roomForCapacity = {
  '1':['1'],
  '2':['1', '2'],
  '3':['1', '2', '3'],
  '100':['0']
};

function capacityValidation () {
  return roomForCapacity[roomNumber.value].includes(capacityNumber.value);
}

pristine.addValidator(capacityNumber, capacityValidation, 'Неправильное значение');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    window.console.log('Можно отправлять');
  } else {
    window.console.log('Форма невалидна');
  }
});
