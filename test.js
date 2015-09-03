var test = require('prova');
var forceArray = require('./');

test('empty', function(t) {
  t.plan(1);
  t.deepEqual(forceArray(), []);
});

test('to array', function(t) {
  t.plan(1);
  t.deepEqual(forceArray(1), [1]);
});

test('keep array', function(t) {
  t.plan(1);
  t.deepEqual(forceArray([1]), [1]);
});