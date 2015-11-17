# force-array

![](https://img.shields.io/travis/ramitos/force-array.svg) ![](https://img.shields.io/coveralls/ramitos/force-array.svg) ![](https://img.shields.io/npm/v/force-array.svg) ![](https://img.shields.io/david/ramitos/force-array.svg) ![](https://img.shields.io/codeclimate/github/ramitos/force-array.svg) ![](https://img.shields.io/npm/l/force-array.svg)


```js
var assert = require('assert');
var forceArray = require('./');

assert.deepEqual(forceArray(), []);
assert.deepEqual(forceArray(1), [1]);
assert.deepEqual(forceArray([1]), [1]);
assert.deepEqual(forceArray.concat([1], [2, 3]), [1, 2, 3]);
assert.deepEqual(forceArray.concat([1], 2), [1, 2]);
assert.deepEqual(forceArray.concat(1, 2), [1, 2]);
```

## install 

```bash
npm install [--save/--save-dev] force-array
```

## license

MIT