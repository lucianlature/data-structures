'use strict';

var Stack = require('../../src/Stack'),
    BinaryTree = require('../../src/BinaryTree'),
    TreeNode = require('../../src/TreeNode'),
    expression = "( ( 10 + 5 ) * 3 )",
    parseTree;

function buildParseTree (expression) {
    var tokens = expression.split(' '),
        stack = new Stack(),
        tree = new BinaryTree(new TreeNode('')),
        currentTree = tree,
        parent;

    stack.push(tree);

    tokens.forEach(function (token) {
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
            throw new Error('Unknown token');
        }
    });

    return tree;
}

function evaluate (parseTree) {
    var operators = {
            '+': function (a, b) {
                return a + b;
            },
            '-': function (a, b) {
                return a - b;
            },
            '*': function (a, b) {
                return a * b;
            },
            '/': function (a, b) {
                return a / b;
            }
        },
        leftC = parseTree.getLeftChild(),
        rightC = parseTree.getRightChild(),
        fn;

    if (leftC && rightC) {
        fn = operators[parseTree.getRoot().getData().data];
        return fn(evaluate(leftC), evaluate(rightC));
    } else {
        return parseTree.getRoot().getData().data;
    }
}

parseTree = buildParseTree(expression);
/*
parseTree.postorder(function (node) {
    console.info(node.getData().data);
});
*/
console.info(evaluate(parseTree));

