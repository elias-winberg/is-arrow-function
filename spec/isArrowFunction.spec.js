'use strict';

var isArrowFunction = require('../lib/isArrowFunction');

describe('isArrowFunction', function () {
    it('detects arrow functions such as "(x) => {return x;}" as arrow functions', function () {
        expect(isArrowFunction((x) => {
            return x;
        })).toBe(true);
    });
    it('detects arrow functions such as "(x) => x" as arrow functions', function () {
        expect(isArrowFunction((x) => x)).toBe(true);
    });
    it('detects arrow functions such as "x => {return x;}" as arrow functions', function () {
        expect(isArrowFunction(x => {
            return x;
        })).toBe(true);
    });
    it('detects arrow functions such as "x => x" as arrow functions', function () {
        expect(isArrowFunction(x => x)).toBe(true);
    });
    it('does not detect "normal" functions as arrow functions', function () {
        expect(isArrowFunction(function (x) {
            return x;
        })).toBe(false);
    });
});