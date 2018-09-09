// @flow
import type {CardSet} from './types';
import cardSets from './cardSets';

export function filter(date: Date, withoutClassic: boolean, isExpired: boolean): CardSet[] {
  let filteredCardSets = cardSets.filter((cardSet) => {
    if (cardSet.releasedAt && date < cardSet.releasedAt) {
      return false;
    }
    if (cardSet.expiredAt && cardSet.expiredAt <= date) {
      return false;
    }
    return true;
  });

  if (isExpired) {
    filteredCardSets = cardSets.filter(cardSet => {
      return !filteredCardSets.includes(cardSet);
    });
  }

  if (withoutClassic) {
    filteredCardSets = filteredCardSets.filter(cardSet => {
      return !cardSet.isClassic;
    });
  }

  return filteredCardSets;
}
