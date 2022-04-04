import {addActiveStatus} from './form-status.js';
import {getAdvertisement} from './card.js';
import {housingFiltration, compareFeatures} from './map-filter.js';

const CENTER_COORDINATES = {
  lat: 35.68173,
  lng: 139.75391
};

const address = document.querySelector('[name="address"]');

address.readOnly = true;

address.value = `${CENTER_COORDINATES.lat}, ${CENTER_COORDINATES.lng}`;

const map = L.map('map-canvas')
  .on('load', () => {
    addActiveStatus();
  })
  .setView({
    lat: CENTER_COORDINATES.lat,
    lng: CENTER_COORDINATES.lng,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: CENTER_COORDINATES.lat,
    lng: CENTER_COORDINATES.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

mainPinMarker.addTo(map);

const resetMap = () => {
  address.value = `${CENTER_COORDINATES.lat}, ${CENTER_COORDINATES.lng}`;
  mainPinMarker.setLatLng({
    lat: CENTER_COORDINATES.lat,
    lng: CENTER_COORDINATES.lng,
  });

  map.setView({
    lat: CENTER_COORDINATES.lat,
    lng: CENTER_COORDINATES.lng,
  }, 12);
  map.closePopup();
};

export{resetMap};

const usualMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const similarMarkerGroup = L.layerGroup().addTo(map);

const createUsualMarker = ({offer, author, location}) => {
  const usualMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon:usualMarkerIcon,
    }
  );

  usualMarker
    .addTo(similarMarkerGroup)
    .bindPopup(getAdvertisement({offer, author}));
};

const SIMILAR_ADVERTISEMENT_COUNT = 10;

const renderCards = (similarCards) => {
  similarMarkerGroup.clearLayers();
  similarCards.slice().filter(housingFiltration).slice(0, SIMILAR_ADVERTISEMENT_COUNT).sort(compareFeatures).forEach((card) => {
    createUsualMarker(card);
  });
};

export{renderCards};

const resetUsualMarkers = () => {
  similarMarkerGroup.clearLayers();
  createUsualMarker();
};

export{resetUsualMarkers};
