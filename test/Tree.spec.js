'use strict';

var Tree = require('../src/Tree'),
	TreeNode = require('../src/TreeNode'),
	chai = require('chai'),
	expect = chai.expect,
	instance = null;

describe('Tree test', function () {

	beforeEach(function (done) {
		instance = new Tree();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Tree instantiation', function () {
		it('should be able to instantiate a new Tree', function () {
			expect(instance).to.be.an.instanceof(Tree);
			expect(instance.getRoot()).to.be.null;
		});
	});

	describe('Tree getRoot', function () {
		it('should return the correct value of the root', function () {
			var root = new TreeNode('root');
			instance.setRoot(root);
			expect(instance.getRoot().getData()).to.equal('root');
		});
		it('should return the correct number of nodes when only root is added', function () {
			var root = new TreeNode('root');
			instance.setRoot(root);
			expect(instance.getNumberOfNodes()).to.equal(1);
		});
	});

	describe('Tree getNumberOfNodes', function () {
		it('should return 0 when no nodes contained', function () {
			expect(instance.getNumberOfNodes()).to.equal(0);
		});
		it('should return the correct number of contained nodes', function () {
			var root = new TreeNode('root'),
				childFoo = new TreeNode('foo'),
				childBar = new TreeNode('bar'),
				childFooBar = new TreeNode('foobar');

			childBar.addChild(childFooBar);

			expect(childBar.hasChildren()).to.be.true;
			expect(childBar.getChildrenSize()).to.equal(1);
			expect(childFooBar.hasChildren()).to.be.false;
			expect(childFooBar.getChildrenSize()).to.equal(0);

			root.addChild(childFoo);
			root.addChild(childBar);
			instance.setRoot(root);

			expect(instance.getNumberOfNodes()).to.equal(4);
		});
	});

	describe('Tree isEmpty', function () {
		it('should return true is the tree has no nodes', function () {
			expect(instance.isEmpty()).to.be.true;
		});
		it('should return false when only root is added', function () {
			var root = new TreeNode('root');
			instance.setRoot(root);
			expect(instance.isEmpty()).to.be.false;
		});
		it('should return false when more nodes are added', function () {
			var root = new TreeNode('root'),
				childFoo = new TreeNode('foo'),
				childBar = new TreeNode('bar'),
				childFooBar = new TreeNode('foobar');

			childBar.addChild(childFooBar);
			root.addChild(childFoo);
			root.addChild(childBar);
			instance.setRoot(root);
			expect(instance.isEmpty()).to.be.false;
		});
	});

	describe('Tree search', function () {
		it('should return true if node value found', function () {
			var root = new TreeNode('root'),
				childFoo = new TreeNode('foo'),
				childBar = new TreeNode('bar'),
				childFooBar = new TreeNode('foobar');

			childBar.addChild(childFooBar);

			expect(childBar.hasChildren()).to.be.true;
			expect(childBar.getChildrenSize()).to.equal(1);
			expect(childFooBar.hasChildren()).to.be.false;
			expect(childFooBar.getChildrenSize()).to.equal(0);

			root.addChild(childFoo);
			root.addChild(childBar);
			instance.setRoot(root);

			expect(instance.search('foobar')).to.be.true;
			expect(instance.search('baz')).to.be.false;
		});
	});

	describe('Tree pre-order traversal', function () {
		it('should return the correct order of the nodes', function () {
			var root = new TreeNode('root'),
				childFoo = new TreeNode('foo'),
				childBar = new TreeNode('bar'),
				childFooBar = new TreeNode('foobar'),
				nodes = [],
				cb = function (node) {
					nodes.push(node.getData());
				};

			childBar.addChild(childFooBar);
			root.addChild(childFoo);
			root.addChild(childBar);
			instance.setRoot(root);

			instance.preOrder(root, cb);

			/* Pre-order: root, foo, bar, foobar */
			expect(nodes).to.eql(['root', 'foo', 'bar', 'foobar']);

		});
	});
});
