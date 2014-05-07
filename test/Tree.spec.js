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

	/*
	describe('Tree appendChild', function () {
		it('should be able to add new nodes to the Tree', function () {
			instance
				.appendChild('foo')
				.appendChild('bar')
				.appendChild('foobar');

			instance.children[0].appendChild('').appendChild('');


			//expect(instance.size()).to.equal(1);
			//expect(instance.getRoot().getData()).to.equal('foo');
		});
	});
	*/
});
