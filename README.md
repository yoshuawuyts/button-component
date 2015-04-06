# button-component
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Create an extendable customElement button.

## Installation
```bash
$ npm install button-component
```

## Usage
```js
require('webcomponents.js')

document.registerElement('custom-button', require('button-component'))

const customButton = document.createElement('button', 'custom-button')
document.body.appendChild(customButton)
// => <button is="custom-button"></button>
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/button-component.svg?style=flat-square
[npm-url]: https://npmjs.org/package/button-component
[travis-image]: https://img.shields.io/travis/yoshuawuyts/button-component.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/button-component
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/button-component.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/button-component?branch=master
[downloads-image]: http://img.shields.io/npm/dm/button-component.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/button-component
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
