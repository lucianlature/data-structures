'use strict';

var Node = require('./Node'),
	UnorderedList = require('./UnorderedList'),
	extend = require('../lib/extend'),
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

extend(OrderedList.prototype, UnorderedList.prototype, {

	/**
	 * @description Adds a new item to the list
	 * @this {UnorderedList}
	 * @param  {Any} item Any type of items can be added
	 */
	add: function (item) {
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
	}

});


module.exports = OrderedList;
