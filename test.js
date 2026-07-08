'use strict';

const assert = require('assert');
const LRUCache = require('./index.js');

const c = new LRUCache(2);
c.set('a', 1);
c.set('b', 2);
assert.strictEqual(c.get('a'), 1);
c.set('c', 3); // evicts 'b'
assert.strictEqual(c.get('b'), undefined);
assert.strictEqual(c.get('c'), 3);
assert.strictEqual(c.size, 2);

console.log('All tests passed.');
