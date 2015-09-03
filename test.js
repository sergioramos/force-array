var assert = require('assert');
var forceArray = require('./');

assert.deepEqual(forceArray(), []);
assert.deepEqual(forceArray(1), [1]);
assert.deepEqual(forceArray([1]), [1]);