export type StringComparator = (left: string, right: string) => number;

/**
Ascending sort comparator.

@example
```
import alphaSort = require('alpha-sort');

['b', 'a', 'c'].sort(alphaSort.ascending);
//=> ['a', 'b', 'c']
```
*/
export const ascending: StringComparator;

/**
Descending sort comparator.

@example
```
import alphaSort = require('alpha-sort');

['b', 'a', 'c'].sort(alphaSort.descending);
//=> ['c', 'b', 'a']
```
*/
export const descending: StringComparator;

/**
Case-insensitive ascending sort comparator.

@example
```
import alphaSort = require('alpha-sort');

['B', 'a', 'C'].sort(alphaSort.caseInsensitiveAscending);
//=> ['a', 'B', 'C']
```
*/
export const caseInsensitiveAscending: StringComparator;

/**
Case-insensitive descending sort comparator.

@example
```
import alphaSort = require('alpha-sort');

['B', 'a', 'C'].sort(alphaSort.caseInsensitiveDescending);
//=> ['C', 'B', 'a']
```
*/
export const caseInsensitiveDescending: StringComparator;
