'use strict';

function isArrowFunction(value) {
    return typeof value === 'function' && !value.hasOwnProperty('prototype');
}

module.exports = isArrowFunction;