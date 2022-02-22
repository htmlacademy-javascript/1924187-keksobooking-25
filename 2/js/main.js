function getRandomInt(min, max) {
  if (min < 0 || max <= min) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(-5, 10);

function getRandomFloat(min, max, digits) {
  if (min < 0 || max <= min) {
    return 0;
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(digits);
}

getRandomFloat(5, 10, 2);
