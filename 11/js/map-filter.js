const mapFiltersForm = document.querySelector('.map__filters');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');
const housingFeatures = mapFiltersForm.querySelector('#housing-features');
const featuresInputs = housingFeatures.querySelectorAll('map__checkbox');


const filterValue = (input, cardField) => input.value === cardField || +input.value === cardField || input.value === 'any';

const priceTranslate = (price) => {
  if (price >= 50000) {
    return 'high';
  }
  if (price >= 10000) {
    return 'middle';
  }
  else {
    return 'low';
  }
};

const filterFeatures = (offerFeatures) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  if (checkedFeatures.length !== 0) {
    if (offerFeatures) {
      let featureCnt = 0;
      checkedFeatures.forEach((feature) => {
        if(offerFeatures.includes(feature.value)) {
          featureCnt += 1;
        }
      });
      return featureCnt === checkedFeatures.length;
    }
    return false;
  }
  return true;
};

const housingFiltration = ({offer}) =>
  filterValue(housingType, offer.type) &&
  filterValue(housingPrice, priceTranslate(offer.price)) &&
  filterValue(housingRooms, offer.rooms) &&
  filterValue(housingGuests, offer.guests) &&
  filterFeatures(offer.features);

export {housingFiltration};

const changeevent = (cb) => {
  mapFiltersForm.addEventListener('change', () => cb());
};

export {changeevent};


const getFeaturesRank = ({offer}) => {

  let rank = 0;

  if (offer.features) {
    featuresInputs.forEach((feature) => {
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

export {compareFeatures};

const resetFiltres = (cb) => {
  mapFiltersForm.addEventListener('reset', () => cb());
};

export {resetFiltres};
