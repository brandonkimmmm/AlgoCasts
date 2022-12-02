// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	const columns = n * 2 - 1;
	const mid = Math.floor(columns / 2);

	for (let i = 0; i < n; i++) {
		let row = '';
		const leftIndex = mid - i;
		const rightIndex = mid + i;

		for (let j = 0; j < columns; j++) {
			if (j < leftIndex || j > rightIndex) {
				row += ' ';
			} else {
				row += '#';
			}
		}

		console.log(row);
	}
}

module.exports = pyramid;
