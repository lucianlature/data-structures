'use strict';

var TreeNode = require('./TreeNode');

/**
 * @constructor
 * @description A tree data structure in which each node has at most two children (referred to as the left child and
 * the right child).
 */
function BinaryTree (newRoot) {
    this._root = new TreeNode(newRoot) || null;
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
    this._root = new TreeNode(newRoot);
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
        this._rightChild = temp;
    }
};

BinaryTree.prototype.preorder = function preorder (callback) {

  maybe(callback(this._root));

  if (this._leftChild) {
    maybe(this._leftChild.preorder(callback));
  }
  if (this._rightChild) {
    maybe(this._rightChild.preorder(callback));
  }
};

function maybe (fn) {
  return function () {
    var i;
    if (arguments.length === 0) {
      return;
    } else {
      for (i = 0; i < arguments.length; ++i) {
        if (arguments[i] === null) return;
      }
      return fn.apply(this, arguments);
    }
  }
}

module.exports = BinaryTree;
