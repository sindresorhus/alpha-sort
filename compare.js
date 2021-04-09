const collator = new Intl.Collator();

// eslint-disable-next-line import/no-mutable-exports
let baseCompare = (left, right) => left === right ? 0 : collator.compare(left, right);

const brokenLocaleCompare = collator.compare('b', 'å') > -1;
if (brokenLocaleCompare) {
	baseCompare = (left, right) => left > right ? 1 : (left < right ? -1 : 0);
}

function naturalCompare(left, right) {
	const naturalSplitRegex = /(\d+)/; // Parentheses are important.

	const leftChunks = left.split(naturalSplitRegex);
	const rightChunks = right.split(naturalSplitRegex);

	// If the first chunk doesn't match, the `natural` option is irrelevant.
	if (leftChunks[0] !== rightChunks[0]) {
		return baseCompare(left, right);
	}

	const maxValidIndex = Math.min(leftChunks.length, rightChunks.length) - 1;

	// Note that `maxValidIndex` is guaranteed to be even.
	for (let i = 1; i < maxValidIndex; i += 2) {
		// For odd indexes, values surely match `/^\d+$/`.
		const leftNumber = Number.parseInt(leftChunks[i], 10);
		const rightNumber = Number.parseInt(rightChunks[i], 10);

		if (leftNumber !== rightNumber) {
			return leftNumber - rightNumber;
		}

		// If we're here, the numbers were equal.

		// For even indexes, values surely don't match `/\d/`.
		// If they are not identical, the `natural` option becomes irrelevant.
		if (leftChunks[i + 1] !== rightChunks[i + 1]) {
			return baseCompare(
				leftChunks.slice(i + 1).join(''),
				rightChunks.slice(i + 1).join('')
			);
		}
	}

	// If we're here, the comparison is fully tied with the `natural` option.
	return baseCompare(left, right);
}

export {
	baseCompare,
	naturalCompare
};
