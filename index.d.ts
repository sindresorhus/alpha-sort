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

		@default false
		*/
		readonly caseInsensitive?: boolean;

		/**
		Whether or not to respect the natural order of numbers in the string (such as sorting `10` after `2`).

		@default false
		*/
		readonly natural?: boolean;

		/**
		A custom preprocessor to execute on the strings before sorting. The array is not modified.

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
