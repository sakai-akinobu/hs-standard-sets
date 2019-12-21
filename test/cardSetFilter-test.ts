/* eslint-disable max-nested-callbacks */
import {describe, it} from 'mocha';
import assert from 'power-assert';

import {CardSetName} from '../src/types';
import {filter} from '../src/cardSetFilter';

describe('src/cardSetFilter.js', function() {
  describe('filter', function() {
    describe('Boundary date at card sets and adventures', function() {

      function filterCardSet(dateString: string, name: CardSetName) {
        return filter(new Date(dateString), false, false).filter(cardSet => cardSet.name === name);
      }

      describe('Curse of Naxxramas', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2014-07-21', 'NAXX').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2014-07-22', 'NAXX').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2016-04-15', 'NAXX').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2016-04-16', 'NAXX').length,
            0
          );
        });
      });

      describe('Goblins vs Gnomes', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2014-12-07', 'GVG').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2014-12-08', 'GVG').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2016-04-15', 'GVG').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2016-04-16', 'GVG').length,
            0
          );
        });
      });

      describe('Blackrock Mountain', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2015-04-01', 'BRM').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2015-04-02', 'BRM').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2017-04-06', 'BRM').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2017-04-07', 'BRM').length,
            0
          );
        });
      });

      describe('The Grand Tournament', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2015-08-23', 'TGT').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2015-08-24', 'TGT').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2017-04-06', 'TGT').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2017-04-07', 'TGT').length,
            0
          );
        });
      });

      describe('The League of Explorers', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2015-11-11', 'LOE').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2015-11-12', 'LOE').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2017-04-06', 'LOE').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2017-04-07', 'LOE').length,
            0
          );
        });
      });

      describe('Whispers of the Old Gods', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2016-04-15', 'OG').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2016-04-16', 'OG').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2018-04-11', 'OG').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2018-04-12', 'OG').length,
            0
          );
        });
      });

      describe('One Night in Karazhan', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2016-08-10', 'KARA').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2016-08-11', 'KARA').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2018-04-11', 'KARA').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2018-04-12', 'KARA').length,
            0
          );
        });
      });

      describe('Mean Streets of Gadgetzan', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2016-11-30', 'GANGS').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2016-12-01', 'GANGS').length,
            1
          );
        });
        it('after', function() {
          assert.strictEqual(
            filterCardSet('2018-04-11', 'GANGS').length,
            1
          );
          assert.strictEqual(
            filterCardSet('2018-04-12', 'GANGS').length,
            0
          );
        });
      });

      describe('Journey to Un\'Goro', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2017-04-06', 'UNGORO').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2017-04-07', 'UNGORO').length,
            1
          );
        });
      });

      describe('Knights of the Frozen Throne', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2017-08-10', 'ICECROWN').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2017-08-11', 'ICECROWN').length,
            1
          );
        });
      });

      describe('Kobolds & Catacombs', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2017-12-06', 'LOOTAPALOOZA').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2017-12-07', 'LOOTAPALOOZA').length,
            1
          );
        });
      });

      describe('Witchwood', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2018-04-11', 'GILNEAS').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2018-04-12', 'GILNEAS').length,
            1
          );
        });
      });

      describe('The Boomsday Project', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2018-08-06', 'BOOMSDAY').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2018-08-07', 'BOOMSDAY').length,
            1
          );
        });
      });

      describe('Rastakhan\'s Rumble', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2018-12-03', 'TROLL').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2018-12-04', 'TROLL').length,
            1
          );
        });
      });

      describe('Rise of Shadows', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2019-04-08', 'DALARAN').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2019-04-09', 'DALARAN').length,
            1
          );
        });
      });

      describe('Saviors of Uldum', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2019-08-05', 'ULDUM').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2019-08-06', 'ULDUM').length,
            1
          );
        });
      });

      describe('Descent of Dragons', function() {
        it('before', function() {
          assert.strictEqual(
            filterCardSet('2019-12-09', 'DRAGONS').length,
            0
          );
          assert.strictEqual(
            filterCardSet('2019-12-10', 'DRAGONS').length,
            1
          );
        });
      });
    });

    describe('Standard rule', function() {
      describe('with classic', function() {
        it('Before standard rule is enforced', function() {
          const cardSetNames = filter(new Date('2016-04-15'), false, false).map(cardSet => cardSet.name);
          assert.deepStrictEqual(
            cardSetNames,
            ['CORE', 'EXPERT1', 'NAXX', 'GVG', 'BRM', 'TGT', 'LOE'],
          );
        });

        describe('Year of the Kraken', function() {
          it('Release Whispers of the Old Gods', function() {
            const cardSetNames = filter(new Date('2016-04-16'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'BRM', 'TGT', 'LOE', 'OG'],
            );
          });

          it('Release One Night in Karazhan', function() {
            const cardSetNames = filter(new Date('2016-08-11'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'BRM', 'TGT', 'LOE', 'OG', 'KARA'],
            );
          });

          it('Release Mean Streets of Gadgetzan', function() {
            const cardSetNames = filter(new Date('2016-12-01'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS'],
            );
          });
        });

        describe('Year of the Mammoth', function() {
          it('Release Journey to Un\'Goro', function() {
            const cardSetNames = filter(new Date('2017-04-07'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'OG', 'KARA', 'GANGS', 'UNGORO'],
            );
          });

          it('Release Knights of the Frozen Throne', function() {
            const cardSetNames = filter(new Date('2017-08-11'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN'],
            );
          });

          it('Release Kobolds & Catacombs', function() {
            const cardSetNames = filter(new Date('2017-12-07'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA'],
            );
          });
        });

        describe('Year of the Raven', function() {
          it('Release Witchwood', function() {
            const cardSetNames = filter(new Date('2018-04-12'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS'],
            );
          });

          it('Release The Boomsday Project', function() {
            const cardSetNames = filter(new Date('2018-08-07'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY'],
            );
          });

          it('Release Rastakhan\'s Rumble', function() {
            const cardSetNames = filter(new Date('2018-12-04'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY', 'TROLL'],
            );
          });
        });

        describe('Year of the Dragon', function() {
          it('Release Rise of Shadows', function() {
            const cardSetNames = filter(new Date('2019-04-09'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN'],
            );
          });

          it('Release Saviors of Uldum', function() {
            const cardSetNames = filter(new Date('2019-08-06'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN', 'ULDUM'],
            );
          });

          it('Release Descent of Dragons', function() {
            const cardSetNames = filter(new Date('2019-12-10'), false, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['CORE', 'EXPERT1', 'GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN', 'ULDUM', 'DRAGONS'],
            );
          });
        });
      });

      describe('without classic', function() {
        it('Before standard rule is enforced', function() {
          const cardSetNames = filter(new Date('2016-04-15'), true, false).map(cardSet => cardSet.name);
          assert.deepStrictEqual(
            cardSetNames,
            ['NAXX', 'GVG', 'BRM', 'TGT', 'LOE'],
          );
        });

        describe('Year of the Kraken', function() {
          it('Release Whispers of the Old Gods', function() {
            const cardSetNames = filter(new Date('2016-04-16'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['BRM', 'TGT', 'LOE', 'OG'],
            );
          });

          it('Release One Night in Karazhan', function() {
            const cardSetNames = filter(new Date('2016-08-11'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['BRM', 'TGT', 'LOE', 'OG', 'KARA'],
            );
          });

          it('Release Mean Streets of Gadgetzan', function() {
            const cardSetNames = filter(new Date('2016-12-01'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS'],
            );
          });
        });

        describe('Year of the Mammoth', function() {
          it('Release Journey to Un\'Goro', function() {
            const cardSetNames = filter(new Date('2017-04-07'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['OG', 'KARA', 'GANGS', 'UNGORO'],
            );
          });

          it('Release Knights of the Frozen Throne', function() {
            const cardSetNames = filter(new Date('2017-08-11'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN'],
            );
          });

          it('Release Kobolds & Catacombs', function() {
            const cardSetNames = filter(new Date('2017-12-07'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['OG', 'KARA', 'GANGS', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA'],
            );
          });
        });

        describe('Year of the Raven', function() {
          it('Release Witchwood', function() {
            const cardSetNames = filter(new Date('2018-04-12'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS'],
            );
          });

          it('Release The Boomsday Project', function() {
            const cardSetNames = filter(new Date('2018-08-07'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY'],
            );
          });

          it('Release Rastakhan\'s Rumble', function() {
            const cardSetNames = filter(new Date('2018-12-04'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY', 'TROLL'],
            );
          });
        });

        describe('Year of the Dragon', function() {
          it('Release Rise of Shadows', function() {
            const cardSetNames = filter(new Date('2019-04-09'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN'],
            );
          });

          it('Release Saviors of Uldum', function() {
            const cardSetNames = filter(new Date('2019-08-06'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN', 'ULDUM'],
            );
          });

          it('Release Descent of Dragons', function() {
            const cardSetNames = filter(new Date('2019-12-10'), true, false).map(cardSet => cardSet.name);
            assert.deepStrictEqual(
              cardSetNames,
              ['GILNEAS', 'BOOMSDAY', 'TROLL', 'DALARAN', 'ULDUM', 'DRAGONS'],
            );
          });
        });
      });
    });

    describe('isExpired option', function() {
      it('Is not expired at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), false, false).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY'],
        );
      });

      it('Is expired at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), false, true).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['NAXX', 'GVG', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS'],
        );
      });
    });

    describe('withoutClassic with isExpired option', function() {
      it('Is not expired with classic at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), false, false).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['CORE', 'EXPERT1', 'UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY'],
        );
      });

      it('Is not expired without classic at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), true, false).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['UNGORO', 'ICECROWN', 'LOOTAPALOOZA', 'GILNEAS', 'BOOMSDAY'],
        );
      });

      it('Is expired with classic at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), false, true).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['NAXX', 'GVG', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS'],
        );
      });

      it('Is expired without classic at 2018-09-09', function() {
        const cardSetNames = filter(new Date('2018-09-09'), true, true).map(cardSet => cardSet.name);
        assert.deepStrictEqual(
          cardSetNames,
          ['NAXX', 'GVG', 'BRM', 'TGT', 'LOE', 'OG', 'KARA', 'GANGS'],
        );
      });
    });
  });
});
