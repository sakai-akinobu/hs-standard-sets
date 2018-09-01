// @flow
export type CardSetName =
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
  ;

export type CardSet = {|
  name: CardSetName,
  releasedAt: Date,
  expiredAt: ?Date,
|};
