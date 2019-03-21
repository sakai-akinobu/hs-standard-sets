import {CardSet} from './types';
import cardSets from './cardSets';

function isExpiredAt(cardSet: CardSet, date: Date) {
  return cardSet.expiredAt && cardSet.expiredAt <= date;
}

function isReleasedAt(cardSet: CardSet, date: Date) {
  return cardSet.releasedAt && cardSet.releasedAt <= date;
}

export function filter(date: Date, withoutClassic: boolean, isExpired: boolean): CardSet[] {
  let filteredCardSets = [];
  if (isExpired) {
    filteredCardSets = cardSets.filter(cardSet => isExpiredAt(cardSet, date));
  } else {
    filteredCardSets = cardSets.filter(cardSet => {
      return isReleasedAt(cardSet, date) && (!cardSet.expiredAt || !isExpiredAt(cardSet, date));
    });
  }

  if (withoutClassic) {
    filteredCardSets = filteredCardSets.filter(cardSet => {
      return !cardSet.isClassic;
    });
  }

  return filteredCardSets;
}
