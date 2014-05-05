'use strict';

/**
 * @constructor
 * @description The basic building block for the linked list implementation.
 * Each node object must hold at least two pieces of information:
 * the data field of the node (the node itself)
 * a reference to the next node.
 */
function Node (initData) {
	this.data = initData;
	this.next = null;
}

/**
 * @description Returns associated data
 * @this {Node}
 */
Node.prototype.getData = function () {
	return this.data;
};

/**
 * @description Returns the next node
 * @this {Node}
 */
Node.prototype.getNext = function () {
	return this.next;
};

/**
 * @description Sets associated data
 * @this {Node}
 * @param {Any} newData Any type of items can be added
 */
Node.prototype.setData = function (newData) {
	this.data = newData;
};

/**
 * @description Sets the next node
 * @this {Node}
 * @param {Node} newNext A Node instance
 */
Node.prototype.setNext = function (newNext) {
	this.next = newNext;
};

module.exports = Node;
