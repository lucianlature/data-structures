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
 * @description Checks if the queue is empty or not
 * @return {Boolean} True if the queue is empty, false otherwise
 */
Queue.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description Adds a new item to the rear of the queue
 * @this {Queue}
 * @param  {Any} item Any type of items can be added
 */
Queue.prototype.enqueue = function (item) {
	this._items.push(item);
};

/** @description  Removes the front item from the queue.
 * @param  {Any} item
 * @return {Any} The removed item
 */
Queue.prototype.dequeue = function () {
	return this._items.pop();
};

/**
 * @description  Returns the number of items in the queue
 * @return {Number} Number of items
 */
Queue.prototype.size = function () {
	return this._items.length;
};

module.exports = Queue;
