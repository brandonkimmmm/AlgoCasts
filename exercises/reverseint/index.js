// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let result = 0;
	const isNegative = n < 0;
	n = Math.abs(n);

	while (n !== 0) {
		if (result > 0) result *= 10;
		result += n % 10;
		n = Math.floor(n / 10);
	}

	return isNegative ? result * -1 : result;
}

// function reverseInt(n) {
// 	let splitInt = n.toString().split('');
// 	let isNegative = false;

// 	if (splitInt[0] === '-') {
// 		isNegative = true;
// 		splitInt.slice(1);
// 	}

// 	for (let i = 0; i < splitInt.length / 2; i++) {
// 		const temp = splitInt[i];
// 		splitInt[i] = splitInt[splitInt.length - i - 1];
// 		splitInt[splitInt.length - i - 1] = temp;
// 	}

// 	return isNegative ? parseInt(splitInt.join('')) * -1 : parseInt(splitInt.join(''));
// }

module.exports = reverseInt;
