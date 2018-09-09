// @noflow
/* eslint-disable max-nested-callbacks */
import {describe, it} from 'mocha';
import assert from 'power-assert';

import {sets} from '../src/index';

describe('src/index.js', function() {
  describe('sets', function() {
    it('No arguments are passed', function() {
      assert(sets().length > 0);
    });

    it('An argument is null', function() {
      assert.throws(() => {
        sets(null);
      }, TypeError);
    });

    describe('date option', function() {
      it('An argument is a Date object', function() {
        assert.strictEqual(sets({date: new Date('2017-12-31')}).length, 8);
      });

      describe('An argument is not a Date object', function() {
        it('string', function() {
          assert.throws(() => {
            sets({date: '2018-09-01'});
          }, TypeError);
        });

        it('number', function() {
          assert.throws(() => {
            sets({date: 1});
          }, TypeError);
        });
      });
    });

    describe('withoutClassic option', function() {
      it('An argument is a boolean', function() {
        assert.strictEqual(sets({date: new Date('2017-12-31'), withoutClassic: true}).length, 6);
      });

      describe('An argument is not a boolean', function() {
        it('string', function() {
          assert.throws(() => {
            sets({withoutClassic: 'true'});
          }, TypeError);
        });

        it('number', function() {
          assert.throws(() => {
            sets({withoutClassic: 1});
          }, TypeError);
        });
      });
    });

    describe('isExpired option', function() {
      it('An argument is a boolean', function() {
        assert.strictEqual(sets({date: new Date('2017-12-31'), isExpired: false}).length, 8);
      });

      describe('An argument is not a boolean', function() {
        it('string', function() {
          assert.throws(() => {
            sets({isExpired: 'true'});
          }, TypeError);
        });

        it('number', function() {
          assert.throws(() => {
            sets({isExpired: 1});
          }, TypeError);
        });
      });
    });
  });
});
