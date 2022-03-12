const adForm = document.querySelector('.ad-form');
const adFieldset = adForm.querySelectorAll('fieldset');
const admapFilter = document.querySelector('.map__filters');
const adFilterElements = admapFilter.querySelectorAll('select, fieldset');

const addDisabledStatus = () => {
  adForm.classList.add('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.setAttribute('disabled', 'disabled');
  });
  admapFilter.classList.add('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.setAttribute('disabled', 'disabled');
  });
};

addDisabledStatus();

const addActiveStatus = () => {
  adForm.classList.remove('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.removeAttribute('disabled', 'disabled');
  });
  admapFilter.classList.remove('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.removeAttribute('disabled', 'disabled');
  });
};

addActiveStatus();
