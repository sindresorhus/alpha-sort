import test from 'ava';
import alphaSort from '.';

test('main', t => {
	// If any of them were undefined, the `sort` call might luckily pass
	t.truthy(alphaSort.ascending);
	t.truthy(alphaSort.descending);
	t.truthy(alphaSort.caseInsensitiveAscending);
	t.truthy(alphaSort.caseInsensitiveDescending);

	t.deepEqual(['b', 'a', 'c'].sort(alphaSort.ascending), ['a', 'b', 'c']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort.ascending), ['b', 'c', 'å']);
	t.deepEqual(['b', 'a', 'c'].sort(alphaSort.descending), ['c', 'b', 'a']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort.descending), ['å', 'c', 'b']);
	t.deepEqual(['b', '🦄', 'c'].sort(alphaSort.ascending), ['b', 'c', '🦄']);
	t.deepEqual(['B', 'a', 'C'].sort(alphaSort.caseInsensitiveAscending), ['a', 'B', 'C']);
	t.deepEqual(['B', 'a', 'C'].sort(alphaSort.caseInsensitiveDescending), ['C', 'B', 'a']);
	t.deepEqual(['bar', 'baz', 'Baz'].sort(alphaSort.caseInsensitiveAscending), ['bar', 'Baz', 'baz']);

	t.deepEqual(
		['C', 'åa', 'd', 'A', 'Åb', 'b', 'B', 'bar', 'Bar'].sort(alphaSort.caseInsensitiveAscending),
		['A', 'B', 'b', 'Bar', 'bar', 'C', 'd', 'åa', 'Åb']
	);
	t.deepEqual(
		['C', 'åa', 'd', 'A', 'Åb', 'b', 'B', 'bar', 'Bar'].sort(alphaSort.caseInsensitiveDescending),
		['Åb', 'åa', 'd', 'C', 'bar', 'Bar', 'b', 'B', 'A']
	);
});
