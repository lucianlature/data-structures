'use strict';

var TreeNode = require('./TreeNode'),
	Queue = require('./Queue');

/**
 * @constructor
 * @description A tree consists of a set of nodes and a set of edges that connect pairs of nodes.
 */
function Tree () {
	this._root = null;
};

Tree.prototype.getRoot = function () {
	return this._root;
};

Tree.prototype.setRoot = function (newRoot) {
	this._root = newRoot;
};

Tree.prototype.getNumberOfNodes = function (node) {
	var numberOfNodes = 0;

	if (this._root !== null) {
		numberOfNodes = 1 + this._getNumberOfNodes(node || this._root); // 1 for the root
	}

	return numberOfNodes;
};

Tree.prototype._getNumberOfNodes = function (node) {
	var numberOfNodes = node.getChildrenSize(),
		l = numberOfNodes,
		children = node.getChildren(),
		i = 0,
		child = null;

	while (i < l) {
		child = children[i];
		numberOfNodes += this._getNumberOfNodes(child);
		i += 1;
	}

	return numberOfNodes;
};

Tree.prototype.isEmpty = function () {
	return this._root === null;
};

Tree.prototype.search = function (item) {
	if (this._root !== null) {
		return this._find(this._root, item);
	}
};

Tree.prototype._find = function (currentNode, item) {
	var current = currentNode,
		numberOfNodes = current.getChildrenSize(),
		children = current.getChildren(),
		found = false,
		i = 0,
		child = null;

	while (i < numberOfNodes && !found) {
		child = children[i];
		if (child.getData() === item) {
			found = true;
		} else {
			found = this._find(child, item);
		}
		i += 1;
	}

	return found;
};

Tree.prototype.preOrder = function (node, callback) {
	var numberOfNodes = node.getChildrenSize(),
		children = node.getChildren();

	if (callback) {
		callback(node);
	}

	children.forEach(function (child) {
		this.preOrder(child, callback);
	}, this);
};

Tree.prototype.postOrder = function (node, callback) {
	var numberOfNodes = node.getChildrenSize(),
		children = node.getChildren();

	children.forEach(function (child) {
		this.postOrder(child, callback);
	}, this);

	if (callback) {
		callback(node);
	}
};

Tree.prototype.bfs = function (root, callback) {
	var q = new Queue(),
		node,
		// numberOfNodes = root.getChildrenSize(),
		children;

	q.enqueue(root);

	while (!q.isEmpty()) {
		node = q.dequeue();
		children = node.getChildren();
		if (callback) {
			callback(node);
		}
		children.forEach(function (child) {
			q.enqueue(child);
		}, this);
	}
}

module.exports = Tree;
