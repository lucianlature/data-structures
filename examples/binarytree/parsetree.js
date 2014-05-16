/*
from pythonds.basic.stack import Stack
from pythonds.trees.binaryTree import BinaryTree

def buildParseTree(fpexp):
    fplist = fpexp.split()
    pStack = Stack()
    eTree = BinaryTree('')
    pStack.push(eTree)
    currentTree = eTree
    for i in fplist:
        if i == '(':
            currentTree.insertLeft('')
            pStack.push(currentTree)
            currentTree = currentTree.getLeftChild()
        elif i not in ['+', '-', '*', '/', ')']:
            currentTree.setRootVal(int(i))
            parent = pStack.pop()
            currentTree = parent
        elif i in ['+', '-', '*', '/']:
            currentTree.setRootVal(i)
            currentTree.insertRight('')
            pStack.push(currentTree)
            currentTree = currentTree.getRightChild()
        elif i == ')':
            currentTree = pStack.pop()
        else:
            raise ValueError
    return eTree

pt = buildParseTree("( ( 10 + 5 ) * 3 )")
pt.postorder()  #defined and explained in the next section
*/

'use strict';

var Stack = require('../../src/Stack'),
    BinaryTree = require('../../src/BinaryTree'),
    TreeNode = require('../../src/TreeNode'),
    expression = "( ( 10 + 5 ) * 3 )",
    parsedTree;

function buildParseTree (expression) {
    var tokens = expression.split(''),
        stack = new Stack(),
        tree = new BinaryTree(new TreeNode('')),
        currentTree = tree,
        parent;

    stack.push(tree);

    tokens.filter(function (token) {
        return token !== ' ';
    }).forEach(function (token) {
        if (token === '(') {
            currentTree.insertLeft(new TreeNode(''));
            stack.push(currentTree);
            currentTree = currentTree.getLeftChild();
        } else if (['+', '-', '*', '/', ')'].indexOf(token) < 0) {
            currentTree.setRoot(new TreeNode(+token));
            parent = stack.pop();
            currentTree = parent;
        } else if (['+', '-', '*', '/'].indexOf(token) >= 0) {
            currentTree.setRoot(new TreeNode(token));
            currentTree.insertRight(new TreeNode(''));
            stack.push(currentTree);
            currentTree = currentTree.getRightChild();
        } else if (token === ')') {
            currentTree = stack.pop();
        } else {
            throw new Error('Token unknown');
        }
    });

    return tree;
}

parsedTree = buildParseTree(expression);

console.info(parsedTree);

