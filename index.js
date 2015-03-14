'use strict';

// localCompare works in Node 0.10, but broken in 0.12 and io.js
var brokenLocaleCompare = 'a'.localeCompare('å') === -1;

function compare(a, b) {
	if (brokenLocaleCompare) {
		return a > b ? 1 : a < b ? -1 : 0;
	}

	return a === b ? 0 : a.localeCompare(b);
}

exports.asc = function (a, b) {
	return compare(a, b);
};

exports.desc = function (a, b) {
	return compare(b, a);
};
