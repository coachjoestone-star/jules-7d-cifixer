# Contributor & automation guide

## Project
`lru-cache-util` is a small dependency-free LRU cache. Keep the public API stable.

## Style
- CommonJS modules, 2-space indentation.
- Every behavioral change needs a matching assertion in `test.js`.

## Testing
- `npm test` runs `node test.js` and must pass before a PR is merged.

## Continuous integration
CI runs on every push and pull request (`.github/workflows/ci.yml`) with two jobs:
- `test` — installs dependencies and runs the test suite.
- `release-gate` — verifies release readiness.

Keep both jobs green. If a maintainer or automated agent needs to make a PR merge-ready, both jobs must pass.
