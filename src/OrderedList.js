'use strict';

var Node = require('./Node'),
	sortingOperation = function (a, b) {
		return a - b;
	};

/**
 * @constructor
 * @description A list is a collection of items where each item holds a
 * relative position that is based upon some underlying characterisitc of the item.
 * The ordering is typically either ascending or descending - meaningful comparison operation
 * must be defined.
 */
function OrderedList () {
	this._head = null;
	this._tail = null;
	this._length = 0;
}

/**
 * @description Checks if the list is empty or not
 * @return {Boolean} True if the list is empty, false otherwise
 */
OrderedList.prototype.isEmpty = function () {
	return this._head === null;
};

/**
 * @description Adds a new item to the list
 * @this {UnorderedList}
 * @param  {Any} item Any type of items can be added
 */
OrderedList.prototype.add = function (item) {
	var current = this._head,
		previous = null,
		stop = false,
		temp = new Node(item);

	while (current !== null && !stop) {
		if (sortingOperation(current.getData(), item) > 0) {
			stop = true;
		} else {
			previous = current;
			current = current.getNext();
		}
	}

	if (previous === null) {
		temp.setNext(this._head);
		this._head = temp;
	} else {
		temp.setNext(current);
		previous.setNext(temp);
	}

	this._length += 1;

};

/**
 * @description  Returns the number of items in the list
 * @return {Number} Number of items
 */
OrderedList.prototype.size = function () {
	return this._length;
};

/**
 * @description Searches for the item in the list
 * @param  {Any} item
 * @return {boolean} Returns true if item is found
 */
OrderedList.prototype.search = function (item) {
	var current = this._head,
		found = false;

	while (current !== null && !found) {
		if (current.getData() === item) {
			found = true;
		} else {
			current = current.getNext();
		}
	}

	return found;
};

/**
 * @description Removes the item from the list. It needs the item and modifies the list.
 * @param  {Any} item
 */
OrderedList.prototype.remove = function (item) {
	var current = this._head,
		previous = null,
		found = false;

	while (!found) {
		if (current.getData() === item) {
			found = true;
		} else {
			previous = current;
			current = current.getNext();
		}
	}

	if (previous === null) {
		this._head = current.getNext();
	} else {
		previous.setNext(current.getNext());
	}

	this._length -= 1;

};

/**
 * @description Returns the position of the item in the list
 * @param  {Any} item
 * @return {Number} Index or -1 if this list does not contain the element.
 */
OrderedList.prototype.indexOf = function (item) {
	var current = this._head,
		index = 0;

	while (current !== null) {
		if (current.getData() === item) {
			return index;
		} else {
			current = current.getNext();
		}
		index += 1;
	}

	return -1;
};

/**
 * @description Removes and return the last item in the list.
 * @param {Number} position If present, removes and returns the item at position pos.
 * @return {*}
 */
OrderedList.prototype.pop = function (position) {
	var current = this._head,
		previous = null,
		foundPos = false,
		position = (typeof position === 'undefined') ? this.size() - 1 : position,
		index = 0;

	while (!foundPos) {
		if (index === position) {
			foundPos = true;
		} else {
			previous = current;
			current = current.getNext();
			index += 1;
		}
	}

	if (previous === null) {
		this._head = current.getNext();
	} else {
		previous.setNext(current.getNext());
	}

	this._length -= 1;

	return current;
};

module.exports = OrderedList;
