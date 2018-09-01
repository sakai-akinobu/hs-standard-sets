// @flow
import {filter} from './cardSetFilter';

function sets(date: Date = new Date()) {
  return filter(date).map(cardSet => cardSet.name);
}

export default {
  sets,
};
