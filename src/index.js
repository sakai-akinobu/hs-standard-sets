// @flow
import isDate from 'lodash/isDate';

import {filter} from './cardSetFilter';

export function sets(date: Date = new Date()) {
  if (!isDate(date)) {
    throw new TypeError('An argument must be Date object.');
  }

  return filter(date).map(cardSet => cardSet.name);
}

export default {
  sets,
};
