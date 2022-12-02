// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.temp = new Stack();
		this.data = new Stack();
	}

	add(value) {
		while (this.data.peek() !== undefined) {
			this.temp.push(this.data.pop());
		}

		this.temp.push(value);

		while (this.temp.peek() !== undefined) {
			this.data.push(this.temp.pop());
		}
	}

	remove() {
		return this.data.pop();
	}

	peek() {
		return this.data.peek();
	}
}

module.exports = Queue;
