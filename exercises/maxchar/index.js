// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const dict = {};

	for (const char of str) {
		dict[char] = (dict[char] || 0) + 1;
	}

	let max = 0;
	let maxChar = '';

	for (const char in dict) {
		if (dict[char] > max) {
			max = dict[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;
