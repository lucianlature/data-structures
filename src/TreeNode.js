'use strict';

var UnorderedList = require('./UnorderedList'),
	extend = require('../lib/extend');

/**
 * @constructor
 * @description The basic building block for the tree data structures implementation.
 * Each node object must hold at least two pieces of information:
 * the data field of the node (the node itself)
 * a reference to the next node.
 */
function TreeNode (initData) {
	this.data = initData || null;
	this.children = [];
}

/**
 * @description Sets associated data
 * @this {TreeNode}
 * @param {Any} newData Any type of items can be added
 */
TreeNode.prototype.setData = function (newData) {
	this.data = newData;
};

/**
 * @description Returns associated data
 * @this {TreeNode}
 */
TreeNode.prototype.getData = function () {
	return this.data;
};

/**
 * @description Returns associated data
 * @this {TreeNode}
 */
TreeNode.prototype.getChildren = function () {
	return this.children;
};

/**
 * @description Returns associated data
 * @this {TreeNode}
 */
TreeNode.prototype.setChildren = function (newChildren) {
	this.children = newChildren;
};

TreeNode.prototype.getChildrenSize = function () {
	return this.children.length;
};

TreeNode.prototype.hasChildren = function () {
	return !!this.getChildrenSize();
};

TreeNode.prototype.addChild = function (newChild) {
	this.children.push(newChild);
};

TreeNode.prototype.removeChildren = function () {
	this.children = [];
};

module.exports = TreeNode;
