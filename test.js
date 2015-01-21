'use strict';
var test = require('ava');
var alphaSort = require('./');

test(function (t) {
	t.assert(['b', 'a', 'c'].sort(alphaSort.asc)[0] === 'a');
	t.assert(['a', 'A', 'c'].sort(alphaSort.asc)[0] === 'A');
	t.assert(['b', 'a', 'c'].sort(alphaSort.desc)[0] === 'c');
	t.assert(['b', 'å', 'c'].sort(alphaSort.desc)[0] === 'å');
	t.end();
});
