// @flow
export type Options = {
  date?: Date,
  withoutClassic?: boolean,
  isExpired?: boolean,
};

export type CardSetName =
  | 'CORE'
  | 'EXPERT1'
  | 'NAXX'
  | 'GVG'
  | 'BRM'
  | 'TGT'
  | 'LOE'
  | 'OG'
  | 'KARA'
  | 'GANGS'
  | 'UNGORO'
  | 'ICECROWN'
  | 'LOOTAPALOOZA'
  | 'GILNEAS'
  | 'BOOMSDAY'
  | 'TROLL'
  ;

export type CardSet = {|
  name: CardSetName,
  isClassic: boolean,
  releasedAt: ?Date,
  expiredAt: ?Date,
|};
