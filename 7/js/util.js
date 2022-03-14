function getRandomInt(min, max) {
  if (min < 0 || max <= min) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, digits) {
  if (min < 0 || max <= min) {
    return 0;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(digits);
}

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

export {getRandomInt, getRandomFloat, getRandomArrayElement};
