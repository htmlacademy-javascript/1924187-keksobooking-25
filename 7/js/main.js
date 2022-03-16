import {createSimilarAdvertisement} from './data.js';

createSimilarAdvertisement();


import {appendSimilarAdvertisement} from './card.js';

import {addDisabledStatus} from './form-status.js';

import {addActiveStatus} from './form-status.js';

import './user-form.js';

appendSimilarAdvertisement(createSimilarAdvertisement());

addDisabledStatus();

addActiveStatus();
