// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
	};

	add(data) {
		for (let i = this.data.length; i > 0; i--) {
			this.data[i] = this.data[i - 1];
		}
		this.data[0] = data;

		// // js cheat
		// this.data = [data, ...this.data];

		// // js helper
		// this.data.unshift(data);
	}

	remove() {
		return this.data.pop();
	}
}

module.exports = Queue;
