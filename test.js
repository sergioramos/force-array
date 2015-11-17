'use strict';

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

test('concat array', function(t) {
  t.plan(1);
  t.deepEqual(forceArray([1], [2, 3]), [1, 2, 3]);
});

test('concat array and number', function(t) {
  t.plan(1);
  t.deepEqual(forceArray([1], 2), [1, 2]);
});

test('concat numbers', function(t) {
  t.plan(1);
  t.deepEqual(forceArray(1, 2), [1, 2]);
});
