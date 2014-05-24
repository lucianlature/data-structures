'use strict';

/**
 * @constructor
 * @description The basic building block for the tree data structures implementation.
 * Each node object must hold at least two pieces of information:
 * the data field of the node (the node itself) and a list of references
 * to nodes (the "children"), with the constraints that no reference is duplicated,
 * and none points to the root.
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
 * @description Return the list of children associated with the node
 * @this {TreeNode}
 */
TreeNode.prototype.getChildren = function () {
    return this.children;
};

/**
 * @description Returns associated children
 * @param {Array} newChildren
 * @this {TreeNode}
 */
TreeNode.prototype.setChildren = function (newChildren) {
    this.children = newChildren;
};

/**
 * @description Return the number of children for the node
 * @this {TreeNode}
 */
TreeNode.prototype.getChildrenSize = function () {
    return this.children.length;
};

/**
 * @description Return true if the node has children
 * @this {TreeNode}
 */
TreeNode.prototype.hasChildren = function () {
    return !!this.getChildrenSize();
};

/**
 * @description Return the number of children for the node
 * @param {*} newChild
 * @this {TreeNode}
 */
TreeNode.prototype.addChild = function (newChild) {
    this.children.push(newChild);
};

/**
 * @description Remove all children of the node
 * @this {TreeNode}
 */
TreeNode.prototype.removeChildren = function () {
    this.children = [];
};

module.exports = TreeNode;
