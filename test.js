import test from 'ava';
import alphaSort from '.';

test('main', t => {
	t.deepEqual(['b', 'a', 'c'].sort(alphaSort.ascending), ['a', 'b', 'c']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort.ascending), ['b', 'c', 'å']);
	t.deepEqual(['b', 'a', 'c'].sort(alphaSort.descending), ['c', 'b', 'a']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort.descending), ['å', 'c', 'b']);
	t.deepEqual(['b', '🦄', 'c'].sort(alphaSort.ascending), ['b', 'c', '🦄']);
});
