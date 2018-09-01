// @flow
/* eslint-disable max-nested-callbacks */
import {describe, it} from 'mocha';
import assert from 'power-assert';

import type {CardSetName} from '../src/types';
import {filter} from '../src/cardSetFilter';

describe('src/cardSetFilter.js', function() {
  describe('filter', function() {

    function filterCardSet(dateString: string, name: CardSetName) {
      return filter(new Date(dateString)).filter(cardSet => cardSet.name === name);
    }

    describe('Boundary date at card sets and adventures', function() {
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
    });
  });
});
