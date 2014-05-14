'use strict';

/**
 * @constructor
 * @description A tree data structure in which each node has at most two children (referred to as the left child and
 * the right child).
 */
function BinaryTree () {
    this._root = null;
    this.leftChild = null;
    this.rightChild = null;
}

BinaryTree.prototype.getRoot = function () {
    return this._root;
};

BinaryTree.prototype.setRoot = function (newRoot) {
    this._root = newRoot;
};

module.exports = BinaryTree;
