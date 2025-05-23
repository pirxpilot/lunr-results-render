[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]

# lunr-results-render

Render lunr search results in HTML

## Install

```sh
$ npm install --save lunr-results-render
```

## Usage

```js
const lunrResultsRender = require('lunr-results-render');

const index = lunr.Index.load(si.index);
const results = index.search(query);
lunrResultsRender(results, si.store);
```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/lunr-results-render
[npm-url]: https://npmjs.org/package/lunr-results-render

[build-url]: https://github.com/pirxpilot/lunr-results-render/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/lunr-results-render/check.yaml?branch=main
