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

const AVATAR_ID = [1];

function getAvatarUrl () {
  let avatarUrlId = AVATAR_ID[AVATAR_ID.length - 1];
  AVATAR_ID.push(avatarUrlId + 1);

  if (avatarUrlId < 10) {
    avatarUrlId = `0${avatarUrlId}`;
  }
  return `img/avatars/user${avatarUrlId}.png`;
}

const ADVERTISEMENT_TITLE = [
  'Гостиница уютная',
  'Отель у моря',
  'Хостел лимон',
  'Отель в норе',
  'Гостиница вип',
  'Апартаменты в лесу',
  'Квартира на юге',
  'Студия в центре',
  'Гостиница прибой',
  'Квартира Леночки',
];

const TYPES_HOUSEROOM = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIME_CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES_HOUSEROOM = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS_HOUSEROOM = [
  'Уютная светлая квартира, шикарный вид',
  'Очень комфортабельная гостиница со всеми удобствами',
  'Первая береговая линия, незабываемый вид',
  'Молодежный отель в центре города, собственный бар и ресторан',
  'На территории имеется мангальная зона и аренда снастей для рыбалки',
  'Для любителей активного отдыха',
  'Хостел с игровой зоной, кинотеатром и собственной библеотекой',
  'В каждом номере есть собственная ванная комната и кухня',
  'Рядом находится Краеведческий музей, а так же кафе, в которых можно вкусно позавтракать',
  'Просторные, чистые номера, возможен заезд с животными'
];

const PHOTOS_HOUSEROOM = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_ADVERTISEMENT_COUNT = 10;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const createAdvertisement = () => {
  const LOCATION_LAT = getRandomFloat(35.65, 35.7, 5);
  const LOCATION_LNG = getRandomFloat(139.7, 139.8, 5);

  return {
    author: {
      avatar: getAvatarUrl(),
    },

    offer:{
      title: getRandomArrayElement(ADVERTISEMENT_TITLE),
      address: `${LOCATION_LAT}, ${LOCATION_LNG}`,
      price: getRandomInt(100, 5000),
      type: getRandomArrayElement(TYPES_HOUSEROOM),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 20),
      checkin: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(TIME_CHECKIN_CHECKOUT),
      features: FEATURES_HOUSEROOM.slice(getRandomInt(0, FEATURES_HOUSEROOM.length - 1)),
      description: getRandomArrayElement(DESCRIPTIONS_HOUSEROOM),
      photos: PHOTOS_HOUSEROOM.slice(getRandomInt(0, PHOTOS_HOUSEROOM.length - 1))
    },

    location:{
      lat: LOCATION_LAT,
      lng: LOCATION_LNG
    }
  };
};

const similarAdvertisement = Array.from({length: SIMILAR_ADVERTISEMENT_COUNT}, createAdvertisement);

window.console.log(similarAdvertisement);
