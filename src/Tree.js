'use strict';

var Queue = require('./Queue');

/**
 * @constructor
 * @description A tree consists of a set of nodes and a set of edges that connect pairs of nodes.
 */
function Tree () {
    this._root = null;
}

/**
 * @description Return the root of the tree
 * @return {Any}
 */
Tree.prototype.getRoot = function () {
    return this._root;
};

/**
 * @description Sets new value for the root
 * @param {Any} newRoot
 */
Tree.prototype.setRoot = function (newRoot) {
    this._root = newRoot;
};

/**
 * @description
 * @param  {TreeNode} node Get the number of nodes beneath the node argument
 * @return {Number}
 */
Tree.prototype.getNumberOfNodes = function (node) {
    var numberOfNodes = 0;

    if (this._root !== null) {
        numberOfNodes = 1 + this._getNumberOfNodes(node || this._root); // 1 for the root
    }

    return numberOfNodes;
};

/**
 * description Private function to count the number of nodes for a given node
 * @param  {TreeNode} node
 * @return {Number} Count of nodes
 * @private
 */
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

/**
 * @description Returns true if tree doesn't have a root node
 * @return {Boolean}
 */
Tree.prototype.isEmpty = function () {
    return this._root === null;
};

/**
 * @description Search for a given value inside tree
 * @param  {Any} item The needle in the haystack
 * @return {Boolean} true if found
 */
Tree.prototype.search = function (item) {
    if (this._root !== null) {
        return this._find(this._root, item);
    }
};

/**
 * @description
 * @param  {TreeNode} currentNode The node to start search from
 * @param  {Any} item  Searched value
 * @return {Boolean} True if found
 * @private
 */
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

/**
 * @description Depth-first-search pre-order algorithm
 * @param  {[type]}   node     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
Tree.prototype.dfsPreOrder = function (node, callback) {
    var children = node.getChildren();

    if (callback) {
        callback(node);
    }

    children.forEach(function (child) {
        this.dfsPreOrder(child, callback);
    }, this);
};

Tree.prototype.dfsPostOrder = function (node, callback) {
    var children = node.getChildren();

    children.forEach(function (child) {
        this.dfsPostOrder(child, callback);
    }, this);

    if (callback) {
        callback(node);
    }
};

Tree.prototype.bfs = function (root, callback) {
    var q = new Queue(),
        node,
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
        });
    }
};

module.exports = Tree;
