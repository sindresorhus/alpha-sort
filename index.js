'use strict';

const collator = new Intl.Collator();
let compare = (left, right) => left === right ? 0 : collator.compare(left, right);

const brokenLocaleCompare = collator.compare('b', 'å') > -1;
if (brokenLocaleCompare) {
	compare = (left, right) => left > right ? 1 : left < right ? -1 : 0;
}

function caseInsensitiveCompare(left, right) {
	const lowercaseComparison = compare(left.toLowerCase(), right.toLowerCase());
	return lowercaseComparison === 0 ? compare(left, right) : lowercaseComparison;
}

exports.ascending = (left, right) => compare(left, right);
exports.descending = (left, right) => compare(right, left);
exports.caseInsensitiveAscending = (left, right) => caseInsensitiveCompare(left, right);
exports.caseInsensitiveDescending = (left, right) => caseInsensitiveCompare(right, left);
