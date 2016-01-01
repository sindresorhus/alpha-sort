import test from 'ava';
import m from './';

test(t => {
	t.is(['b', 'a', 'c'].sort(m.asc)[0], 'a');
	t.is(['b', 'å', 'c'].sort(m.asc)[2], 'å');
	t.is(['b', 'a', 'c'].sort(m.desc)[0], 'c');
	t.is(['b', 'å', 'c'].sort(m.desc)[0], 'å');
});
