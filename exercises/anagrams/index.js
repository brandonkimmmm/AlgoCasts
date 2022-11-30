// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const buildCharDict = (str) => {
	const regex = new RegExp(/\w/);
	const dict = {};

	for (const char of str) {
		if (regex.test(char)) {
			dict[char.toLowerCase()] = (dict[char.toLowerCase()] || 0) + 1;
		}
	}

	return dict;
}

function anagrams(stringA, stringB) {
	const dictA = buildCharDict(stringA);
	const dictB = buildCharDict(stringB);

	if (Object.keys(dictA).length !== Object.keys(dictB).length) {
		return false;
	}

	for (const char in dictA) {
		if (dictA[char] !== dictB[char]) {
			return false;
		}
	}

	return true;
}

module.exports = anagrams;
