const sliderPriceElement = document.querySelector('.ad-form__slider');
const priceInputElement = document.querySelector('#price');

noUiSlider.create(sliderPriceElement, {
  range: {
    min: Number(priceInputElement.min),
    max: Number(priceInputElement.max),
  },
  start: Number(priceInputElement.placeholder),
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderPriceElement.noUiSlider.on('update', () => {
  priceInputElement.value = sliderPriceElement.noUiSlider.get();
});

priceInputElement.addEventListener('change',() => {
  sliderPriceElement.noUiSlider.set(priceInputElement.value);
});

const resetSlider = () => {
  sliderPriceElement.noUiSlider.reset();
};

export {resetSlider};
