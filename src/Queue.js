'use strict';

/**
 * @constructor
 * @description A queue is structured as an ordered collection of items
 * where items are added at the "rear" and removed from the end called the "top".
 * Queues are ordered FIFO.
 */
function Queue() {
	this._items = [];
}

/**
 * @description Checks if the stack is empty or not
 * @return {Boolean} True if the queue is empty, false otherwise
 */
Queue.prototype.isEmpty = function () {
	return this._items.length === 0;
};

module.exports = Queue;
