'use strict';

var Node = require('./Node');

/**
 * @constructor
 * @description A list is a collection of items where each item holds a
 * relative position with respect to the others.
 */
function UnorderedList () {
	this._head = null;
	this._tail = null;
}

/**
 * @description Checks if the list is empty or not
 * @return {Boolean} True if the list is empty, false otherwise
 */
UnorderedList.prototype.isEmpty = function () {
	return this._head === null;
};

/**
 * @description Adds a new item to the list
 * @this {UnorderedList}
 * @param  {Any} item Any type of items can be added
 */
UnorderedList.prototype.add = function (item) {
    var temp = new Node (item);
    temp.setNext(this._head);
    this._head = temp;
    this._tail = temp.getNext();
};

/**
 * @description  Returns the number of items in the list
 * @return {Number} Number of items
 */
UnorderedList.prototype.size = function () {
	var current = this._head,
		size = 0;

	while (current !== null) {
		size += 1;
		current = current.getNext();
	}

	return size;
};

/**
 * @description Searches for the item in the list
 * @param  {Any} item
 * @return {boolean} Returns true if item is found
 */
UnorderedList.prototype.search = function (item) {
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
UnorderedList.prototype.remove = function (item) {
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

};

/**
 * @description Adds a new item to the end of the list making it the last item in the collection.
 * @param  {Any} item
 */
UnorderedList.prototype.append = function (item) {
	var temp = new Node (item);
	if (this._tail === null) {
		this._head = temp;
		this._tail = temp;
	} else {
		this._tail.setNext(temp);
		this._tail = temp;
	}
};

/**
 * @description Returns the position of the item in the list
 * @param  {Any} item
 * @return {Number} Index or -1 if this list does not contain the element.
 */
UnorderedList.prototype.indexOf = function (item) {
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

// insert(pos,item) adds a new item to the list at position pos.
// It needs the item and returns nothing.
// Assume the item is not already in the list and there are enough existing items to have position pos.
UnorderedList.prototype.insert = function (position, item) {
	var current = this._head,
		temp = new Node (item),
		index = 0;

	while (current !== null) {

		if (index === position - 1) {
			var next = current.getNext();
			current.setNext(temp);
			temp.setNext(next);
		}

		current = current.getNext();
		index += 1;
	}
};

module.exports = UnorderedList;
