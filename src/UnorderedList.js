'use strict';

/**
 * @constructor
 * @description A list is a collection of items where each item holds a
 * relative position with respect to the others.
 */
function UnorderedList () {
	this.head = null;
}

/**
 * @description Checks if the list is empty or not
 * @return {Boolean} True if the list is empty, false otherwise
 */
UnorderedList.prototype.isEmpty = function () {
	return this.head === null;
};

module.exports = UnorderedList;
