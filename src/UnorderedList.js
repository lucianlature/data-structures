'use strict';

var Node = require('./Node');

/**
 * @constructor
 * @description A list is a collection of items where each item holds a
 * relative position with respect to the others.
 */
function UnorderedList () {
	this._head = null;
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
};

module.exports = UnorderedList;
