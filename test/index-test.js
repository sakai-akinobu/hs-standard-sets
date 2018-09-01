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

    it('An argument is a Date object', function() {
      assert.strictEqual(sets(new Date('2017-12-31')).length, 6);
    });

    describe('An argument is not a Date object', function() {
      it('null', function() {
        assert.throws(() => {
          sets(null);
        }, TypeError);
      });

      it('string', function() {
        assert.throws(() => {
          sets('2018-09-01');
        }, TypeError);
      });

      it('number', function() {
        assert.throws(() => {
          sets(1);
        }, TypeError);
      });
    });
  });
});
