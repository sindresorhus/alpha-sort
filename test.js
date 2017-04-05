import test from 'ava';
import m from '.';

test(t => {
	t.deepEqual(['b', 'a', 'c'].sort(m.asc), ['a', 'b', 'c']);
	t.deepEqual(['b', 'å', 'c'].sort(m.asc), ['b', 'c', 'å']);
	t.deepEqual(['b', 'a', 'c'].sort(m.desc), ['c', 'b', 'a']);
	t.deepEqual(['b', 'å', 'c'].sort(m.desc), ['å', 'c', 'b']);
	t.deepEqual(['b', '🦄', 'c'].sort(m.as), ['b', 'c', '🦄']);
});
