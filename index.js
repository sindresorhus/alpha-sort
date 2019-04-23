'use strict';

const collator = new Intl.Collator();
let compare = (left, right) => left === right ? 0 : collator.compare(left, right);

const brokenLocaleCompare = collator.compare('b', 'å') > -1;
if (brokenLocaleCompare) {
	compare = (left, right) => left > right ? 1 : left < right ? -1 : 0;
}

exports.ascending = (left, right) => compare(left, right);
exports.descending = (left, right) => compare(right, left);
