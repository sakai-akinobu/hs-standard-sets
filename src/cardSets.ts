import {CardSet} from './types';

const cardSets: CardSet[] = [
  {
    name: 'CORE', // Basic
    isClassic: true,
    releasedAt: new Date('2014/03/11'),
    expiredAt: null,
  },
  {
    name: 'EXPERT1', // Expert cards
    isClassic: true,
    releasedAt: new Date('2014/03/11'),
    expiredAt: null,
  },
  {
    name: 'NAXX', // Curse of Naxxramas
    isClassic: false,
    releasedAt: new Date('2014-07-22'),
    expiredAt: new Date('2016-04-16'),
  },
  {
    name: 'GVG', // Goblins vs Gnomes
    isClassic: false,
    releasedAt: new Date('2014-12-08'),
    expiredAt: new Date('2016-04-16'),
  },
  {
    name: 'BRM', // Blackrock Mountain
    isClassic: false,
    releasedAt: new Date('2015-04-02'),
    expiredAt: new Date('2017-04-07'),
  },
  {
    name: 'TGT', // The Grand Tournament
    isClassic: false,
    releasedAt: new Date('2015-08-24'),
    expiredAt: new Date('2017-04-07'),
  },
  {
    name: 'LOE', // The League of Explorers
    isClassic: false,
    releasedAt: new Date('2015-11-12'),
    expiredAt: new Date('2017-04-07'),
  },
  {
    name: 'OG', // Whispers of the Old Gods
    releasedAt: new Date('2016-04-16'),
    expiredAt: new Date('2018-04-12'),
    isClassic: false,
  },
  {
    name: 'KARA', // One Night in Karazhan
    releasedAt: new Date('2016-08-11'),
    expiredAt: new Date('2018-04-12'),
    isClassic: false,
  },
  {
    name: 'GANGS', // Mean Streets of Gadgetzan
    releasedAt: new Date('2016-12-01'),
    expiredAt: new Date('2018-04-12'),
    isClassic: false,
  },
  {
    name: 'UNGORO', // Journey to Un'Goro
    isClassic: false,
    releasedAt: new Date('2017-04-07'),
    expiredAt: new Date('2019-04-09'),
  },
  {
    name: 'ICECROWN', // Knights of the Frozen Throne
    isClassic: false,
    releasedAt: new Date('2017-08-11'),
    expiredAt: new Date('2019-04-09'),
  },
  {
    name: 'LOOTAPALOOZA', // Kobolds & Catacombs
    isClassic: false,
    releasedAt: new Date('2017-12-07'),
    expiredAt: new Date('2019-04-09'),
  },
  {
    name: 'GILNEAS', // Witchwood
    isClassic: false,
    releasedAt: new Date('2018-04-12'),
    expiredAt: null,
  },
  {
    name: 'BOOMSDAY', // The Boomsday Project
    isClassic: false,
    releasedAt: new Date('2018-08-07'),
    expiredAt: null,
  },
  {
    name: 'TROLL', // Rastakhan's Rumble
    isClassic: false,
    releasedAt: new Date('2018-12-04'),
    expiredAt: null,
  },
  {
    name: 'DALARAN', // Rise of Shadows
    isClassic: false,
    releasedAt: new Date('2019-04-09'),
    expiredAt: null,
  },
];

export default cardSets;
