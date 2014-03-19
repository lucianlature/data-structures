'use strict';

/**
 * @constructor
 * @description A stack is structured as an ordered collection of items
 * where items are added to and removed from the end called the "top".
 * Stacks are ordered LIFO.
 */
var Stack = function () {
	this._items = [];
};

/**
 * @description Adds a new item to the top of the stack
 * @this {Stack}
 * @param  {*} item Any type of items can be added
 */
Stack.prototype.push = function (item) {
	this._items.push(item);
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

module.exports = Stack;
