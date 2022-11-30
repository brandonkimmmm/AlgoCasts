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
		this.queue = [];
	};

	add(data) {
		for (let i = this.queue.length; i > 0; i--) {
			this.queue[i] = this.queue[i - 1];
		}
		this.queue[0] = data;

		// // js cheat
		// this.queue = [data, ...this.queue];

		// // js helper
		// this.queue.unshift(data);
	}

	remove() {
		return this.queue.pop();
	}
}

module.exports = Queue;
