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

### alphaSort.caseInsensitiveAscending

Case-insensitive ascending sort comparator.

Note: If two elements are considered equal in the case-insensitive comparison, the tie-break will be a case-sensitive comparison:

```js
const alphaSort = require('alpha-sort');

['bar', 'baz', 'Baz'].sort(alphaSort.caseInsensitiveAscending);
//=> ['bar', 'Baz', 'baz']
```

### alphaSort.caseInsensitiveDescending

Case-insensitive descending sort comparator.

The same note for `caseInsensitiveAscending` applies.


## Related

- [num-sort](https://github.com/sindresorhus/num-sort) - Sort an array of numbers


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
