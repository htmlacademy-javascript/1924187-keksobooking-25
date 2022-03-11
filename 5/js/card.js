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

  photos.forEach((photo) => {
    const photoListItem = advertisementElement.children[0].cloneNode(true);
    photoListItem.src = photo;
    photoListFragment.append(photoListItem);
  });
  advertisementElement.innerHTML ='';
  advertisementElement.append(photoListFragment);
};

const getAdvertisement = ({offer, author}) => {
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  advertisementElement.querySelector('.popup__title').textContent = offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertisementElement.querySelector('.popup__type').textContent = houseroomTranslate[offer.type];
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  addFeatures(advertisementElement.querySelector('.popup__features'), offer.features);

  const popupDescription = advertisementElement.querySelector('.popup__description');
  if (offer.description) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.classList.add('hidden');
  }

  addPhotos(advertisementElement.querySelector('.popup__photos'), offer.photos);
  advertisementElement.querySelector('.popup__avatar').src = author.avatar;
  return advertisementElement;
};

const appendSimilarAdvertisement = (similarAdvertisements) => {
  similarAdvertisements.forEach(({offer, author}) => {
    similarAdvertisementList.appendChild(getAdvertisement({offer, author}));
  });
};

appendSimilarAdvertisement(createSimilarAdvertisement());
