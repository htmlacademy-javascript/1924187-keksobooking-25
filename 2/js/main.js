function getRandomInt(min, max) {
  if (min < 0 || max <= min) {
    return('Некорректное значение');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();

function getRandomFloat(min, max, digits) {
  if (min < 0 || max <= min) {
    return('Некорректное значение');
  }
  return ((Math.random() * (max - min + 1)) + min).toFixed(digits);
}

getRandomFloat();
