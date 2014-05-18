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
  /*
  describe('BinaryTree instantiation', function () {
    it('should be able to instantiate a new BinaryTree', function () {
      expect(instance).to.be.an.instanceof(BinaryTree);
    });
    it('should be able to instantiate a new BinaryTree with a root value', function () {
      instance = new BinaryTree('root');
      expect(instance.getData()).to.equal('root');
    });
  });

  describe('BinaryTree getRoot', function () {
    it('should return the correct value of the root', function () {
      var root = 'root';
      instance.setRoot(root);
      expect(instance.getData()).to.equal('root');
    });
  });

  describe('BinaryTree getLeftChild', function () {
    it('should return null is left child is not set', function () {
      expect(instance.getLeftChild()).to.be.null;
    });
    it('should return the correct value of left child when set', function () {
      var left = 'left',
          root = 'root';
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
      var right = 'right',
          root = 'root';
      instance.setRoot(root);
      instance.insertRight(right);
      expect(instance.getRightChild().getData()).to.equal('right');
    });
  });
  */
  describe('BinaryTree pre-order traversal', function () {
    it('should return the correct order of the nodes', function () {
      var nodes = [],
          cb = function (node) {
            nodes.push(node.getData());
          };

      instance.setRoot('root');
      instance.insertLeft('foo');
      instance.insertRight('bar');
      instance.getLeftChild().insertLeft('foobar');
      instance.getLeftChild().insertRight('baz');
      instance.getRightChild().insertLeft('foobaz');

      instance.preorder(cb);

      /* DFS Pre-order: root, foo, foobar, baz, bar, foobaz */
      expect(nodes).to.eql(['root', 'foo', 'foobar', 'baz', 'bar', 'foobaz']);

    });
  });

});
