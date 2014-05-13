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
  });
});
