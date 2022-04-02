const adForm = document.querySelector('.ad-form');
const adFieldset = adForm.querySelectorAll('fieldset');
const admapFilter = document.querySelector('.map__filters');
const adFilterElements = admapFilter.querySelectorAll('select, fieldset');

const addDisabledStatus = () => {
  adForm.classList.add('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  admapFilter.classList.add('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.disabled = true;
  });
};

export {addDisabledStatus};

const addActiveStatus = () => {
  adForm.classList.remove('ad-form--disabled');
  adFieldset.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  admapFilter.classList.remove('map__filters--disabled');
  adFilterElements.forEach((filterElement) => {
    filterElement.disabled = false;
  });
};

export {addActiveStatus};
