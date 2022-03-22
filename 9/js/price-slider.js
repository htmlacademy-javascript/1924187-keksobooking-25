const sliderPrice = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: Number(priceInput.max),
  },
  start: 0,
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

sliderPrice.noUiSlider.on('update', () => {
  priceInput.value = sliderPrice.noUiSlider.get();
});

priceInput.addEventListener('change',() => {
  sliderPrice.noUiSlider.set(priceInput.value);
});
