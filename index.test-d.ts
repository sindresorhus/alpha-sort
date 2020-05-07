import {expectType} from 'tsd';
import alphaSort = require('.');

expectType<number>(alphaSort.ascending('a', 'b'));
expectType<number>(alphaSort.descending('a', 'b'));
expectType<number>(alphaSort.caseInsensitiveAscending('a', 'b'));
expectType<number>(alphaSort.caseInsensitiveDescending('a', 'b'));

['b', 'a', 'c'].sort(alphaSort.ascending);
['b', 'a', 'c'].sort(alphaSort.descending);
['b', 'a', 'c'].sort(alphaSort.caseInsensitiveAscending);
['b', 'a', 'c'].sort(alphaSort.caseInsensitiveDescending);
