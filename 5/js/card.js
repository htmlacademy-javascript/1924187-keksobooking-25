import {createSimilarAdvertisement} from './data.js';

const displayAdvertisement = document.querySelector('.map');
const similarAdvertisementList = displayAdvertisement.querySelector('.map__canvas');

const similarAdvertisementTemplate = document.querySelector('#card').content.querySelector('.popup');

const houseroomTranslate = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};
const addFeatures = (advertisementElement, features) => {
  const featuresList = advertisementElement.querySelectorAll('.popup__feature');

  featuresList.forEach((featureListItem) => {
    const isNecessary = features.some(
      (feature) => featureListItem.classList.contains(`popup__feature--${feature}`),
    );

    if (!isNecessary) {
      featureListItem.remove();
    }
  });
};

const addPhotos = (advertisementElement, photos) => {
  const photoListFragment = document.createDocumentFragment();

  for(let i = 0; i < photos.length; i++) {
    const photoListItem = advertisementElement.children[0].cloneNode(true);
    photoListItem.src = photos[i];
    photoListFragment.append(photoListItem);
  }
  advertisementElement.innerHTML ='';
  advertisementElement.append(photoListFragment);
};

//Функция скрытия блока в случае отсутсвия данных
const isBlockHided = (advertisementElement, field) => {
  if (!field) {
    advertisementElement.style.display = 'none';
    return true;
  }
  return false;
};

const similarAdvertisements = createSimilarAdvertisement();

similarAdvertisements.forEach(({offer, author}) => {
  const AdvertisementElement = similarAdvertisementTemplate.cloneNode(true);
  AdvertisementElement.querySelector('.popup__title').textContent = offer.title;
  AdvertisementElement.querySelector('.popup__text--address').textContent = offer.address;
  AdvertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  AdvertisementElement.querySelector('.popup__type').textContent = houseroomTranslate[offer.type];
  AdvertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  AdvertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  addFeatures(AdvertisementElement.querySelector('.popup__features'), offer.features);
  if(!isBlockHided(AdvertisementElement.querySelector('.popup__description'), offer.description)) {AdvertisementElement.querySelector('.popup__description').textContent = offer.description;}
  addPhotos(AdvertisementElement.querySelector('.popup__photos'), offer.photos);
  AdvertisementElement.querySelector('.popup__avatar').src = author.avatar;
  similarAdvertisementList.appendChild(AdvertisementElement);
});
