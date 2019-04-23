import {expectType} from 'tsd';
import alphaSort = require('.');

expectType<number>(alphaSort.ascending('a', 'b'));
expectType<number>(alphaSort.descending('a', 'b'));

['b', 'a', 'c'].sort(alphaSort.ascending);
['b', 'a', 'c'].sort(alphaSort.descending);
