'use strict';

exports.asc = function (a, b) {
	return a === b ? 0 : a.localeCompare(b);
};

exports.desc = function (a, b) {
	return exports.asc(b, a);
};
