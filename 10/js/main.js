import {addDisabledStatus} from './form-status.js';

import {addActiveStatus} from './form-status.js';

import './user-form.js';

import {renderCards} from './map.js';

import './price-slider.js';

import {getData} from './api.js';

addDisabledStatus();

addActiveStatus();

const SIMILAR_ADVERTISEMENT_COUNT = 10;

getData((cards) => {
  renderCards(cards.slice(0, SIMILAR_ADVERTISEMENT_COUNT));
});
