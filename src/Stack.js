'use strict';

/**
 * @constructor
 * @description A stack is structured as an ordered collection of items
 * where items are added to and removed from the end called the "top".
 * Stacks are ordered LIFO.
 */
function Stack() {
	this._items = [];
}

/**
 * @description Adds a new item to the top of the stack
 * @this {Stack}
 * @param  {Any} item Any type of items can be added
 */
Stack.prototype.push = function (item) {
	this._items.push(item);
};

/**
 * @description  Removes the top item from the stack.
 * @param  {Any} item
 * @return {Any} The removed item
 */
Stack.prototype.pop = function () {
	return this._items.pop();
};

/**
 * @description Checks if the stack is empty or not
 * @return {Boolean} True if the stack is empty, false otherwise
 */
Stack.prototype.isEmpty = function () {
	return this._items.length === 0;
};

/**
 * @description  Returns the number of items in the stack
 * @return {Number} Number of items
 */
Stack.prototype.size = function () {
	return this._items.length;
};

/**
 * @description Returns the value of the top item from the stack but does not remove it
 * @return {Any|null} The top item
 */
Stack.prototype.peek = function () {
	var size = this.size();
	if (size >= 1) {
		return this._items[size - 1];
	}
	return null;
};

module.exports = Stack;
