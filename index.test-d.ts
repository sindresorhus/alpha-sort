import {expectType, expectAssignable} from 'tsd';
import alphaSort from './index.js';

declare const options: {
	descending?: boolean;
	natural?: boolean;
	caseInsensitive?: boolean;
	preprocessor?: (string: string) => string;
} | undefined;

expectAssignable<Parameters<typeof alphaSort>[0]>(options);

expectType<number>(alphaSort()('a', 'b'));
expectType<number>(alphaSort({})('a', 'b'));
expectType<number>(alphaSort(options)('a', 'b'));

['b', 'a', 'c'].sort(alphaSort());
['b', 'a', 'c'].sort(alphaSort({}));
['b', 'a', 'c'].sort(alphaSort(options));
