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

module.exports = Queue;
