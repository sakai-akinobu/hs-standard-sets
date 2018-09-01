// @flow
import type {CardSet} from './types';
import cardSets from './cardSets';

export function filter(date: Date = new Date()): CardSet[] {
  return cardSets.filter((cardSet) => {
    if (date < cardSet.releasedAt) {
      return false;
    }
    if (cardSet.expiredAt && cardSet.expiredAt <= date) {
      return false;
    }
    return true;
  });
}
