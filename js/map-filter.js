const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeElement = mapFiltersForm.querySelector('#housing-type');
const housingPriceElement = mapFiltersForm.querySelector('#housing-price');
const housingRoomsElement = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsElement = mapFiltersForm.querySelector('#housing-guests');
const housingFeaturesElement = mapFiltersForm.querySelector('#housing-features');
const featuresInputsElements = housingFeaturesElement.querySelectorAll('.map__checkbox');

const priceMap = {
  middle: {min: 10000, max: 50000},
  low:{min: 0, max: 10000},
  high: {min: 50000, max: 100000},
};

const filterValue = (input, cardField) => input.value === cardField || +input.value === cardField || input.value === 'any';

const priceTranslate = (price) => {
  if (price >= priceMap.high.min) {
    return 'high';
  }
  if (price >= priceMap.middle.min) {
    return 'middle';
  }
  else {
    return 'low';
  }
};

const filterFeatures = (offerFeatures) => {
  const checkedFeaturesElement = housingFeaturesElement.querySelectorAll('input:checked');

  if (checkedFeaturesElement.length !== 0) {
    if (offerFeatures) {
      let featureCnt = 0;
      checkedFeaturesElement.forEach((feature) => {
        if(offerFeatures.includes(feature.value)) {
          featureCnt += 1;
        }
      });
      return featureCnt === checkedFeaturesElement.length;
    }
    return false;
  }
  return true;
};

const housingFiltration = ({offer}) =>
  filterValue(housingTypeElement, offer.type) &&
  filterValue(housingPriceElement, priceTranslate(offer.price)) &&
  filterValue(housingRoomsElement, offer.rooms) &&
  filterValue(housingGuestsElement, offer.guests) &&
  filterFeatures(offer.features);

const changeEvent = (cb) => {
  mapFiltersForm.addEventListener('change', cb);
};

const getFeaturesRank = ({offer}) => {

  let rank = 0;

  if (offer.features) {
    featuresInputsElements.forEach((feature) => {
      if (offer.features.includes(feature.value)) {
        rank += 1;
      }
    });
  }

  return rank;
};

const compareFeatures = (featureA, featureB) => {
  const rankA = getFeaturesRank(featureA);
  const rankB = getFeaturesRank(featureB);
  return rankB - rankA;
};

const resetFiltres = (cb) => {
  mapFiltersForm.addEventListener('reset', () => setTimeout(cb, 100));
};

export {housingFiltration, changeEvent, compareFeatures, resetFiltres};
