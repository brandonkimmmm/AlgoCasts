// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	const splitString = str.split('');

	for (let i = 0; i < splitString.length / 2; i++) {
		const temp = splitString[splitString.length - 1 - i];
		splitString[splitString.length - 1 - i] = splitString[i];
		splitString[i] = temp;
	}

	return splitString.join('');
}

module.exports = reverse;
