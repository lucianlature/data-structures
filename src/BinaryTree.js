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

/**
 * @description Returns associated data for the node
 * @this {BinaryTree}
 * @return {*}
 */
BinaryTree.prototype.getData = function () {
  return this._root.getData();
}

/**
 * @description Returns the root node
 * @return {TreeNode}
 */
BinaryTree.prototype.getRoot = function () {
    return this._root;
}

/**
 * @description Set the root node
 */
BinaryTree.prototype.setRoot = function (newRoot) {
    this._root = new TreeNode(newRoot);
};

/**
 * @description Returns the left child
 * @return {BinaryTree}
 */
BinaryTree.prototype.getLeftChild = function () {
  return this._leftChild;
};

/**
 * @description Populate the left child
 */
BinaryTree.prototype.insertLeft = function (newNode) {
    var temp = new BinaryTree(newNode);
    if (this._leftChild === null) {
        this._leftChild = temp;
    } else {
        temp._leftChild = this._leftChild;
        this._leftChild = temp;
    }
};

/**
 * @description Returns the left child
 * @return {BinaryTree}
 */
BinaryTree.prototype.getRightChild = function () {
  return this._rightChild;
};

/**
 * @description Populate the right child
 */
BinaryTree.prototype.insertRight = function (newNode) {
    var temp = new BinaryTree(newNode);
    if (this._rightChild === null) {
        this._rightChild = temp;
    } else {
        temp._rightChild = this._rightChild;
        this._rightChild = temp;
    }
};

/**
 * @description Traverse the tree in pre-order
 * @param {Function} callback Callback function to be called
 * on each node
 */
BinaryTree.prototype.preorder = function preorder (callback) {

  maybe(callback(this._root));

  if (this._leftChild) {
    maybe(this._leftChild.preorder(callback));
  }
  if (this._rightChild) {
    maybe(this._rightChild.preorder(callback));
  }
};

/**
 * @description Traverse the tree in post-order
 * @param {Function} callback Callback function to be called
 * on each node
 */
BinaryTree.prototype.postorder = function postorder (callback) {
  if (this._leftChild) {
    maybe(this._leftChild.postorder(callback));
  }
  if (this._rightChild) {
    maybe(this._rightChild.postorder(callback));
  }
  maybe(callback(this._root));
};

/**
 * @description Traverse the tree in in-order
 * @param {Function} callback Callback function to be called
 * on each node
 */
BinaryTree.prototype.inorder = function inorder (callback) {
  if (this._leftChild) {
    maybe(this._leftChild.inorder(callback));
  }
  maybe(callback(this._root));
  if (this._rightChild) {
    maybe(this._rightChild.inorder(callback));
  }
};

/**
 * @description Function that takes a function fn that takes a value as a parameter,
 * and do nothing if the parameter for fn is nothing.
 * @param {Function} fn
 */
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
