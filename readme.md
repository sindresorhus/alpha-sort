# alpha-sort

> Alphabetically sort an array of strings

With correct sorting of unicode characters. Supports [natural sort order](https://en.wikipedia.org/wiki/Natural_sort_order) with an option.

## Install

```
$ npm install alpha-sort
```

## Usage

```js
import alphaSort from 'alpha-sort';

['b', 'a', 'c'].sort(alphaSort());
//=> ['a', 'b', 'c']

['b', 'a', 'c'].sort(alphaSort({descending: true}));
//=> ['c', 'b', 'a']

['B', 'a', 'C'].sort(alphaSort({caseInsensitive: true}));
//=> ['a', 'B', 'C']

['file10.txt', 'file2.txt', 'file03.txt'].sort(alphaSort({natural: true}));
//=> ['file2.txt', 'file03.txt', 'file10.txt']
```

## API

### alphaSort(options?)

Get a comparator function to be used as argument for [`Array#sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

#### options

Type: `object`

##### descending

Type: `boolean`\
Default: `false`

Whether or not to sort in descending order.

##### caseInsensitive

Type: `boolean`\
Default: `false`

Whether or not to sort case-insensitively.

Note: If two elements are considered equal in the case-insensitive comparison, the tie-break will be a standard (case-sensitive) comparison. Example:

```js
import alphaSort from 'alpha-sort';

['bar', 'baz', 'Baz'].sort(alphaSort({caseInsensitive: true}));
//=> ['bar', 'Baz', 'baz']
```

##### natural

Type: `boolean`\
Default: `false`

Whether or not to sort using [natural sort order](https://en.wikipedia.org/wiki/Natural_sort_order) (such as sorting `10` after `2`).

Note: If two elements are considered equal in the natural sort order comparison, the tie-break will be a standard (non-natural) comparison. Example:

```js
import alphaSort from 'alpha-sort';

['file10.txt', 'file05.txt', 'file0010.txt'].sort(alphaSort({natural: true}));
//=> ['file05.txt', 'file0010.txt', 'file10.txt']
```

##### preprocessor

Type: `function`\
Default: `undefined`

A custom function that you can provide to manipulate the elements before sorting. This does not modify the values of the array; it only interferes in the sorting order.

This can be used, for example, if you are sorting book titles in English and want to ignore common articles such as `the`, `a` or `an`:

```js
import alphaSort from 'alpha-sort';

['The Foo', 'Bar'].sort(alphaSort({
	preprocessor: title => title.replace(/^(?:the|a|an) /i, '')
}));
//=> ['Bar', 'The Foo']
```

Note: If two elements are considered equal when sorting with a custom preprocessor, the tie-break will be a comparison without the custom preprocessor.

## Related

- [num-sort](https://github.com/sindresorhus/num-sort) - Sort an array of numbers
