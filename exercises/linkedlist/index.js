// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
	}

	size() {
		let pointer = this.head;
		let size = 0;

		while (pointer) {
			size++;
			pointer = pointer.next;
		}

		return size;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) return null;
		let pointer = this.head;
		while (pointer.next !== null) {
			pointer = pointer.next;
		}
		return pointer;
	}

	clear() {
		if (this.head) {
			// // JS
			// this.head = null;

			// Memory
			while (this.head !== null) {
				let temp = this.head;
				this.head = this.head.next;
				// delete temp
				temp = null;
			}
		}
	}

	removeFirst() {
		if (this.head) {
			// // JS
			// this.head = this.head.next;

			// Memory
			let temp = this.head;
			this.head = this.head.next;
			// delete temp
			temp = null;
		}
	}

	removeLast() {
		if (this.head) {
			if (this.head.next === null) {
				this.head = null;
			} else {
				let pointer = this.head;
				while (pointer.next.next !== null) {
					pointer = pointer.next;
				}

				// // JS
				// pointer.next = null;

				// Memory
				// delete pointer.next.next
				pointer.next.next = null;
				pointer.next = null;
			}
		}
	}

	insertLast(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			let pointer = this.head;
			while (pointer.next !== null) {
				pointer = pointer.next;
			}
			pointer.next = node;
		}
	}

	getAt(index) {
		if (this.size() < index + 1) {
			return null;
		}

		let pointer = this.head;
		let pointerIndex = 0;
		while (pointerIndex !== index) {
			pointer = pointer.next;
			pointerIndex++;
		}

		return pointer;
	}

	removeAt(index) {
		const size = this.size();

		if (size >= index + 1) {
			if (index === 0) {
				this.removeFirst();
				return;
			}

			if (index === size - 1) {
				this.removeLast();
				return;
			}

			let pointer = this.head;
			let pointerIndex = 0;

			while (pointerIndex !== index - 1) {
				pointer = pointer.next;
				pointerIndex++;
			}

			// // JS
			// pointer.next = pointer.next.next;

			// Memory
			let temp = pointer.next;
			pointer.next = pointer.next.next;
			// delete temp
			temp = null;
		}
	}

	insertAt(value, index) {
		const size = this.size();

		if (index === 0) {
			this.insertFirst(value);
			return;
		}

		if (index >= size - 1) {
			this.insertLast(value);
			return;
		}

		let pointer = this.head;
		let pointerIndex = 0;

		while (pointerIndex !== index - 1) {
			pointer = pointer.next;
			pointerIndex++;
		}

		let temp = pointer.next;
		pointer.next = new Node(value);
		pointer.next.next = temp;
	}

	forEach(cb) {
		let pointer = this.head;
		let counter = 0;
		while (pointer !== null) {
			cb(pointer, counter);
			pointer = pointer.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let pointer = this.head;
		while (pointer !== null) {
			yield pointer;
			pointer = pointer.next;
		}
	}
}

module.exports = { Node, LinkedList };
