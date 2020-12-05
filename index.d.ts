declare namespace alphaSort {
	type StringComparator = (left: string, right: string) => number;

	type Options = {
		/**
		Whether or not to sort in descending order.

		@default false
		*/
		readonly descending?: boolean;

		/**
		Whether or not to sort case-insensitively.

		Note: If two elements are considered equal in the case-insensitive comparison, the tie-break will be a standard (case-sensitive) comparison.

		@example
		```
		const alphaSort = require('alpha-sort');

		['bar', 'baz', 'Baz'].sort(alphaSort({caseInsensitive: true}));
		//=> ['bar', 'Baz', 'baz']
		```

		@default false
		*/
		readonly caseInsensitive?: boolean;

		/**
		Whether or not to sort using natural sort order (such as sorting `10` after `2`).

		Note: If two elements are considered equal in the natural sort order comparison, the tie-break will be a standard (non-natural) comparison.

		@default false
		*/
		readonly natural?: boolean;

		/**
		A custom function that you can provide to manipulate the elements before sorting. This does not modify the values of the array; it only interferes in the sorting order.

		This can be used, for example, if you are sorting book titles in English and want to ignore common articles such as `the`, `a` or `an`.

		Note: If two elements are considered equal when sorting with a custom preprocessor, the tie-break will be a comparison without the custom preprocessor.

		@example
		```
		const alphaSort = require('alpha-sort');

		['The Foo', 'Bar'].sort(alphaSort({
			preprocessor: title => title.replace(/^(?:the|a|an) /i, '')
		}));
		//=> ['Bar', 'The Foo']
		```

		@default undefined
		*/
		readonly preprocessor?: (string: string) => string;
	}
}

declare const alphaSort: {
	/**
	Get a comparator function to be used as argument for `Array#sort`.

	@param options - Choose ascending/descending, case sensitivity, and number natural ordering.

	@example
	```
	const alphaSort = require('alpha-sort');

	['b', 'a', 'c'].sort(alphaSort());
	//=> ['a', 'b', 'c']

	['b', 'a', 'c'].sort(alphaSort({descending: true}));
	//=> ['c', 'b', 'a']

	['B', 'a', 'C'].sort(alphaSort({caseInsensitive: true}));
	//=> ['a', 'B', 'C']

	['file10.txt', 'file2.txt', 'file03.txt'].sort(alphaSort({natural: true}));
	//=> ['file2.txt', 'file03.txt', 'file10.txt']
	```
	*/
	(options?: alphaSort.Options): alphaSort.StringComparator;
};

export = alphaSort;
