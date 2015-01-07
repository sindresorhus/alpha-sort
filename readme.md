# alpha-sort [![Build Status](https://travis-ci.org/sindresorhus/alpha-sort.svg?branch=master)](https://travis-ci.org/sindresorhus/alpha-sort)

> Alphabetically sort an array of strings

With correct sorting of unicode characters.


## Install

```
$ npm install --save alpha-sort
```


## Usage

```js
var alphaSort = require('alpha-sort');

['b', 'a', 'c'].sort(alphaSort.asc);
//=> ['a', 'b', 'c']
```


## API

### alphasort.asc

Ascending sort.

### alphasort.desc

Descending sort.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
