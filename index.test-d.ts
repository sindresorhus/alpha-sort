import {expectType} from 'tsd';
import alphaSort = require('.');

declare const options: {
	descending?: boolean;
	natural?: boolean;
	caseInsensitive?: boolean;
	preprocessor?: (string: string) => string;
} | undefined;

expectType<Parameters<typeof alphaSort>[0]>(options);

expectType<number>(alphaSort()('a', 'b'));
expectType<number>(alphaSort({})('a', 'b'));
expectType<number>(alphaSort(options)('a', 'b'));

['b', 'a', 'c'].sort(alphaSort());
['b', 'a', 'c'].sort(alphaSort({}));
['b', 'a', 'c'].sort(alphaSort(options));
