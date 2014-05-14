'use strict';

/**
 * @constructor
 * @description A tree data structure in which each node has at most two children (referred to as the left child and
 * the right child).
 */
function BinaryTree (newRoot) {
    this._root = newRoot || null;
    this._leftChild = null;
    this._rightChild = null;
}

BinaryTree.prototype.getData = function () {
  return this._root.getData();
}

BinaryTree.prototype.getRoot = function () {
    return this._root;
}

BinaryTree.prototype.setRoot = function (newRoot) {
    this._root = newRoot;
};

BinaryTree.prototype.getLeftChild = function () {
  return this._leftChild;
};

BinaryTree.prototype.insertLeft = function (newNode) {
    var temp = new BinaryTree(newNode);
    if (this._leftChild === null) {
        this._leftChild = temp;
    } else {
        temp._leftChild = this._leftChild;
        this._leftChild = temp;
    }
};

BinaryTree.prototype.getRightChild = function () {
  return this._rightChild;
};

BinaryTree.prototype.insertRight = function (newNode) {
    var temp = new BinaryTree(newNode);
    if (this._rightChild === null) {
        this._rightChild = temp;
    } else {
        temp._rightChild = this._rightChild;
        self._rightChild = temp;
    }
};

module.exports = BinaryTree;
