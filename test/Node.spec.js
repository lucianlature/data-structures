'use strict';

var Node = require('../src/Node'),
	expect = chai.expect,
	instance = null;

describe('Node test', function () {

	beforeEach(function (done) {
		instance = new Node('foo');
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Node instantiation', function () {
		it('should be able to instantiate a new node', function () {
			expect(instance).to.be.an.instanceof(Node);
		});
	});

	describe('Node getData', function () {
		it('should get the data on the node', function () {
			expect(instance.getData()).to.equal('foo');
		});
	});

	describe('Node setData', function () {
		it('should set new data on the node', function () {
			instance.setData('bar');
			expect(instance.getData()).to.equal('bar');
		});
	});

	describe('Node setNext', function () {
		it('should set new data on the node', function () {
			var newNode = new Node('bar');
			instance.setNext(newNode);
			expect(instance.getNext().getData()).to.equal('bar');
		});
	});

	describe('Node getNext', function () {
		it('should return a null reference by default', function () {
			expect(instance.getNext()).to.be.null;
		});
		it('should return the referenced node', function () {
			var newNode = new Node('bar');
			instance.setNext(newNode);
			expect(instance.getNext()).to.be.newNode;
		});
	});

});
