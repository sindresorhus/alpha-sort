'use strict';

var brokenLocaleCompare = 'a'.localeCompare('å') === -1;
var compare = null;

if (brokenLocaleCompare) {
	compare = function (a, b) {
		return a > b ? 1 : a < b ? -1 : 0;
	};
} else if (typeof Intl.Collator === 'function') {
	var collator = new Intl.Collator({sensitivity: 'variant'});
	compare = function (a, b) {
		return collator.compare(a, b);
	};
} else {
	compare = function (a, b) {
		return a === b ? 0 : a.localeCompare(b);
	};
}

exports.asc = function (a, b) {
	return compare(a, b);
};

exports.desc = function (a, b) {
	return compare(b, a);
};
