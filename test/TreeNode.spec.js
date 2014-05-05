'use strict';

var TreeNode = require('../src/TreeNode'),
	chai = require('chai'),
	expect = chai.expect,
	instance = null;

describe('TreeNode test', function () {

	beforeEach(function (done) {
		instance = new TreeNode('foo');
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('TreeNode instantiation', function () {
		it('should be able to instantiate a new node', function () {
			expect(instance).to.be.an.instanceof(TreeNode);
		});
		it('should set null as data on the new node when no argument provided', function () {
			instance = new TreeNode();
			expect(instance.getData()).to.be.null;
		});
		it('should have children as a truthy value', function () {
			expect(instance.getChildren()).to.exist;
		});
	});

	describe('TreeNode getChildrenSize', function () {
		it('should return the correct number of children attached to the node', function () {
			expect(instance.getChildrenSize()).to.equal(0);
		});
	});

	describe('TreeNode hasChildren', function () {
		it('should return true if children attached to the node', function () {
			expect(instance.hasChildren()).to.be.false;
		});
	});

	describe('TreeNode getData', function () {
		it('should return the correct data contained by the node', function () {
			expect(instance.getData()).to.equal('foo');
		});
	});

	describe('TreeNode setData', function () {
		it('should set new data on the node', function () {
			instance.setData('bar');
			expect(instance.getData()).to.equal('bar');
		});
	});

	describe('TreeNode addChild', function () {
		it('should add a new node as a child', function () {
			var newNode = new TreeNode('bar');
			instance.addChild(newNode);
			expect(instance.getChildrenSize()).to.equal(1);
			expect(instance.getChildren()).to.eql([newNode]);
		});
	});

	describe('TreeNode removeChildren', function () {
		it('should add a new node as a child', function () {
			var newNode = new TreeNode('bar');
			instance.addChild(newNode);
			instance.removeChildren();
			expect(instance.getChildrenSize()).to.equal(0);
			expect(instance.hasChildren()).to.be.false;
		});
	});

});
