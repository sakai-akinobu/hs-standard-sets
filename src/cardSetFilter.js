// @flow
import type {CardSet} from './types';
import cardSets from './cardSets';

export function filter(date: Date, withoutClassic: boolean): CardSet[] {
  return cardSets.filter((cardSet) => {
    if (withoutClassic && cardSet.isClassic) {
      return false;
    }
    if (cardSet.releasedAt && date < cardSet.releasedAt) {
      return false;
    }
    if (cardSet.expiredAt && cardSet.expiredAt <= date) {
      return false;
    }
    return true;
  });
}
