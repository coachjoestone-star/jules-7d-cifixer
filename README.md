# lru-cache-util

A tiny LRU cache utility for Node.js.

```js
const LRUCache = require('lru-cache-util');
const cache = new LRUCache(100);
cache.set('key', 'value');
cache.get('key');
```

## Release process

New releases must pass CI, including the release-gate check. See `AGENTS.md` for contributor and automation conventions.
