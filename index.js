'use strict';

exports.asc = function (a, b) {
	return a.localeCompare(b);
};

exports.desc = function (a, b) {
	return b.localeCompare(a);
};
