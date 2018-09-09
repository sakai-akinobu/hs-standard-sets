// @flow
import isDate from 'lodash/isDate';
import isBoolean from 'lodash/isBoolean';

import type {Options} from './types';
import {filter} from './cardSetFilter';

export function sets({
  date = new Date(),
  withoutClassic = false,
  isExpired = false,
}: Options = {}) {
  if (!isDate(date)) {
    throw new TypeError('"date" option must be Date object.');
  }
  if (!isBoolean(withoutClassic)) {
    throw new TypeError('"withoutClassic" option must be boolean.');
  }
  if (!isBoolean(isExpired)) {
    throw new TypeError('"isExpired" option must be boolean.');
  }

  return filter(date, withoutClassic, isExpired).map(cardSet => cardSet.name);
}

export default {
  sets,
};
