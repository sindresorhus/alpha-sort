import test from 'ava';
import alphaSort from '.';

test('main', t => {
	t.is(typeof alphaSort(), 'function');

	t.deepEqual(['b', 'a', 'c'].sort(alphaSort()), ['a', 'b', 'c']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort()), ['b', 'c', 'å']);
	t.deepEqual(['b', '🦄', 'c'].sort(alphaSort()), ['b', 'c', '🦄']);

	t.deepEqual(['b', 'a', 'c'].sort(alphaSort({descending: true})), ['c', 'b', 'a']);
	t.deepEqual(['b', 'å', 'c'].sort(alphaSort({descending: true})), ['å', 'c', 'b']);
	t.deepEqual(['b', '🦄', 'c'].sort(alphaSort({descending: true})), ['🦄', 'c', 'b']);
});

test('case insensitive', t => {
	t.deepEqual(['B', 'a', 'C'].sort(alphaSort({caseInsensitive: true})), ['a', 'B', 'C']);
	t.deepEqual(['B', 'a', 'C'].sort(alphaSort({descending: true, caseInsensitive: true})), ['C', 'B', 'a']);
	t.deepEqual(['bar', 'baz', 'Baz'].sort(alphaSort({caseInsensitive: true})), ['bar', 'Baz', 'baz']);

	t.deepEqual(
		['C', 'åa', 'd', 'A', 'Åb', 'b', 'B', 'bar', 'Bar'].sort(alphaSort({caseInsensitive: true})),
		['A', 'B', 'b', 'Bar', 'bar', 'C', 'd', 'åa', 'Åb']
	);
	t.deepEqual(
		['C', 'åa', 'd', 'A', 'Åb', 'b', 'B', 'bar', 'Bar'].sort(alphaSort({descending: true, caseInsensitive: true})),
		['Åb', 'åa', 'd', 'C', 'bar', 'Bar', 'b', 'B', 'A']
	);
});

test('`natural` option', t => {
	const numbers = length => [...new Array(length)].map((_, index) => String(index));

	t.deepEqual(
		numbers(200).reverse().sort(alphaSort({natural: true})),
		numbers(200)
	);

	t.deepEqual(
		['file10.txt', 'file2.txt', 'file03.txt'].sort(alphaSort({natural: true})),
		['file2.txt', 'file03.txt', 'file10.txt']
	);

	const alreadyInNaturalOrder = [
		'a', 'a0', 'a1x', 'a2', 'a03x4', 'a003x10', 'a03x10', 'a003y', 'a10', 'abc'
	];
	t.deepEqual(
		alreadyInNaturalOrder.slice().sort(alphaSort({descending: true, natural: true})),
		alreadyInNaturalOrder.slice().reverse()
	);
});

test('`preprocessor` option', t => {
	t.deepEqual(
		['The Foo', 'Bar'].sort(alphaSort({
			preprocessor: title => title.replace(/^(the|a|an) /i, '')
		})),
		['Bar', 'The Foo']
	);

	const preprocessor = string => string.slice(1); // Strip first character

	t.deepEqual(
		['a9', 'b5', 'z10a', 'c3', 'z10B'].sort(alphaSort({preprocessor})),
		['z10B', 'z10a', 'c3', 'b5', 'a9']
	);

	t.deepEqual(
		['a9', 'b5', 'z10a', 'c3', 'z10B'].sort(alphaSort({preprocessor, descending: true})),
		['a9', 'b5', 'c3', 'z10a', 'z10B']
	);

	t.deepEqual(
		['a9', 'b5', 'z10a', 'c3', 'z10B'].sort(alphaSort({preprocessor, natural: true})),
		['c3', 'b5', 'a9', 'z10B', 'z10a']
	);

	t.deepEqual(
		['a9', 'b5', 'z10a', 'c3', 'z10B'].sort(alphaSort({preprocessor, natural: true, caseInsensitive: true})),
		['c3', 'b5', 'a9', 'z10a', 'z10B']
	);

	t.deepEqual(
		['a9', 'b5', 'z10a', 'c3', 'z10B'].sort(alphaSort({
			preprocessor,
			descending: true,
			natural: true,
			caseInsensitive: true
		})),
		['z10B', 'z10a', 'a9', 'b5', 'c3']
	);
});

test('helpful error on mistake', t => {
	t.throws(
		() => ['foo', 'bar'].sort(alphaSort),
		{
			message: 'Invalid `alphaSort` call. Did you use `.sort(alphaSort)` instead of `.sort(alphaSort())` by mistake?'
		}
	);
});
