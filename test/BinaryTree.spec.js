'use strict';

var BinaryTree = require('../src/BinaryTree'),
    TreeNode = require('../src/TreeNode'),
    chai = require('chai'),
    expect = chai.expect,
    instance = null;

describe('BinaryTree test', function () {

  beforeEach(function (done) {
    instance = new BinaryTree();
    done();
  });

  afterEach(function (done) {
    instance = null;
    done();
  });

  describe('BinaryTree instantiation', function () {
    it('should be able to instantiate a new BinaryTree', function () {
      expect(instance).to.be.an.instanceof(BinaryTree);
    });
    it('should be able to instantiate a new BinaryTree with a root value', function () {
      var root = new TreeNode('root');
      instance = new BinaryTree(root);
      expect(instance.getRoot().getData()).to.equal('root');
    });
  });

  describe('BinaryTree getRoot', function () {
    it('should return the correct value of the root', function () {
      var root = new TreeNode('root');
      instance.setRoot(root);
      expect(instance.getData()).to.equal('root');
    });
  });

  describe('BinaryTree getLeftChild', function () {
    it('should return null is left child is not set', function () {
      expect(instance.getLeftChild()).to.be.null;
    });
    it('should return the correct value of left child when set', function () {
      var left = new TreeNode('left'),
          root = new TreeNode('root');
      instance.setRoot(root);
      instance.insertLeft(left);
      expect(instance.getLeftChild().getData()).to.equal('left');
    });
  });

  describe('BinaryTree getRightChild', function () {
    it('should return null is right child is not set', function () {
      expect(instance.getRightChild()).to.be.null;
    });
    it('should return the correct value of right child when set', function () {
      var right = new TreeNode('right'),
          root = new TreeNode('root');
      instance.setRoot(root);
      instance.insertRight(right);
      expect(instance.getRightChild().getData()).to.equal('right');
    });
  });

  describe('BinaryTree pre-order traversal', function () {
    it('should return the correct order of the nodes', function () {
      var root = new TreeNode('root'),
        childFoo = new TreeNode('foo'),
        childBar = new TreeNode('bar'),
        childFooBar = new TreeNode('foobar'),
        childBaz = new TreeNode('baz'),
        childFooBaz = new TreeNode('foobaz'),
        nodes = [],
        cb = function (node) {
          nodes.push(node.getData());
        };

      childBar.addChild(childFooBar);
      childFoo.addChild(childBaz);
      childBaz.addChild(childFooBaz);
      root.addChild(childFoo);
      root.addChild(childBar);
      instance.setRoot(root);

      instance.dfsPreOrder(root, cb);

      /* DFS Pre-order: root, foo, baz, foobaz, bar, foobar */
      expect(nodes).to.eql(['root', 'foo', 'baz', 'foobaz', 'bar', 'foobar']);

    });
  });

});
