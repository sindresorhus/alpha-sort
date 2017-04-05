'use strict';

const collator = new Intl.Collator();
let compare = (a, b) => a === b ? 0 : collator.compare(a, b);

const brokenLocaleCompare = collator.compare('b', 'å') > -1;
if (brokenLocaleCompare) {
	compare = (a, b) => a > b ? 1 : a < b ? -1 : 0;
}

exports.asc = (a, b) => compare(a, b);
exports.desc = (a, b) => compare(b, a);
