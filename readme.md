# alpha-sort [![Build Status](https://travis-ci.org/sindresorhus/alpha-sort.svg?branch=master)](https://travis-ci.org/sindresorhus/alpha-sort)

> Alphabetically sort an array of strings

With correct sorting of unicode characters.


## Install

```
$ npm install alpha-sort
```


## Usage

```js
const alphaSort = require('alpha-sort');

['b', 'a', 'c'].sort(alphaSort.ascending);
//=> ['a', 'b', 'c']
```


## API

### alphaSort.ascending

Ascending sort comparator.

### alphaSort.descending

Descending sort comparator.


## Related

- [num-sort](https://github.com/sindresorhus/num-sort) - Sort an array of numbers


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
