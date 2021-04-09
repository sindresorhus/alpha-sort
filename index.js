import {baseCompare, naturalCompare} from './compare.js';

export default function alphaSort(options = {}) {
	if (arguments.length === 2) {
		throw new Error('Invalid `alphaSort` call. Did you use `.sort(alphaSort)` instead of `.sort(alphaSort())` by mistake?');
	}

	if (options.preprocessor && typeof options.preprocessor !== 'function') {
		throw new TypeError(`Preprocessor must be a function, got ${typeof options.preprocessor}`);
	}

	const ascendingCompare = options.natural ? naturalCompare : baseCompare;

	const compare = options.descending ?
		(left, right) => ascendingCompare(right, left) :
		ascendingCompare;

	const compareWith = (left, right, transform) => compare(transform(left), transform(right));

	if (options.preprocessor && options.caseInsensitive) {
		return (left, right) =>
			compareWith(left, right, value => options.preprocessor(value).toLowerCase()) ||
			compareWith(left, right, value => options.preprocessor(value)) ||
			compare(left, right);
	}

	if (options.preprocessor) {
		return (left, right) =>
			compareWith(left, right, value => options.preprocessor(value)) ||
			compare(left, right);
	}

	if (options.caseInsensitive) {
		return (left, right) =>
			compareWith(left, right, value => value.toLowerCase()) ||
			compare(left, right);
	}

	return compare;
}
