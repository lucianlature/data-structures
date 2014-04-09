'use strict';

/**
 * @constructor
 * @description A deque (double-endende queue) is an ordered collection of items
 * where adding and removing of items process is unrestrictive, new items can be
 * added at either the front or the rear.
 */
function Deque () {
	this._items = [];
}

/**
 * @description Checks if the deque is empty or not
 * @return {Boolean} True if the deque is empty, false otherwise
 */
Deque.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description Adds a new item to the rear of the deque
 * @this {Deque}
 * @param  {Any} item Any type of items can be added
 */
Deque.prototype.addRear = function (item) {
	this._items.unshift(item);
};

/**
 * @description Removes the rear items and returns it
 * @this {Deque}
 */
Deque.prototype.removeRear = function () {
	return this._items.shift();
};

/**
 * @description  Returns the number of items in the deque
 * @return {Number} Number of items
 */
Deque.prototype.size = function () {
	return this._items.length;
};


module.exports = Deque;
