# force-array

```js
var assert = require('assert');
var forceArray = require('./');

assert.deepEqual(forceArray(), []);
assert.deepEqual(forceArray(1), [1]);
assert.deepEqual(forceArray([1]), [1]);
```

## install 

```bash
npm install [--save/--save-dev] force-array
```

## license

MIT