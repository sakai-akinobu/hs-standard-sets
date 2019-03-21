export interface Options {
  date?: Date;
  withoutClassic?: boolean;
  isExpired?: boolean;
}

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

export interface CardSet {
  name: CardSetName;
  isClassic: boolean;
  releasedAt: Date | null | void;
  expiredAt: Date | null | void;
}
