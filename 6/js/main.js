import {createSimilarAdvertisement} from './data.js';

window.console.log(
  createSimilarAdvertisement()
);

import {appendSimilarAdvertisement} from './card.js';

window.console.log(
  appendSimilarAdvertisement(createSimilarAdvertisement())
);

import {addDisabledStatus} from './form-status.js';

window.console.log(
  addDisabledStatus()
);

import {addActiveStatus} from './form-status.js';

window.console.log(
  addActiveStatus()
);
