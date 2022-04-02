const sliderPrice = document.querySelector('.ad-form__slider');
const priceInput = document.querySelector('#price');

noUiSlider.create(sliderPrice, {
  range: {
    min: Number(priceInput.min),
    max: Number(priceInput.max),
  },
  start: Number(priceInput.placeholder),
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

const resetSlider = () => {
  sliderPrice.noUiSlider.reset();
};

export {resetSlider};
