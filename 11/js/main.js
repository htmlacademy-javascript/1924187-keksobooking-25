import {addDisabledStatus} from './form-status.js';

import {addActiveStatus} from './form-status.js';

import './user-form.js';

import {renderCards} from './map.js';

import './price-slider.js';

import {getData} from './api.js';

import {changeevent, resetFiltres} from './map-filter.js';

import {debounce} from './util.js';

addDisabledStatus();

addActiveStatus();

const RERENDER_DELAY = 500;

getData((cards) => {
  renderCards(cards);
  changeevent(debounce(
    () => renderCards(cards),
    RERENDER_DELAY,
  ));
  resetFiltres(debounce(
    () => renderCards(cards),
    RERENDER_DELAY,
  ));
});
