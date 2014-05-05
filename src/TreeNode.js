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
	this.data = initData;
	this.children = {};
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

TreeNode.prototype.getNumberOfChildren = function () {
	return this.children.size();
};

TreeNode.prototype.hasChildren = function () {
	return !!this.getNumberOfChildren();
};

TreeNode.prototype.addChild = function (newChild) {
	this.children.add(newChild);
};

TreeNode.prototype.addChildAt = function (position, newChild) {
	this.children.add(position, newChild);
};

TreeNode.prototype.getChildAt = function (position) {
	return this.children.get(position);
};

TreeNode.prototype.removeChildren = function () {
	this.children = {};
};

module.exports = TreeNode;
