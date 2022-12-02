// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
	let leftPointer = list.getFirst();
	let rightPointer = list.getFirst();

	while (rightPointer.next && rightPointer.next.next) {
		leftPointer = leftPointer.next;
		rightPointer = rightPointer.next.next;

		if (leftPointer === rightPointer) {
			return true;
		}
	}

	return false;
}

module.exports = circular;
