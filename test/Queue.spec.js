'use strict';

var Queue = require('../src/Queue'),
	chai = require('chai'),
	expect = chai.expect,
	instance = null;

describe('Queue test', function () {

	beforeEach(function (done) {
		instance = new Queue();
		done();
	});

	afterEach(function (done) {
		instance = null;
		done();
	});

	describe('Queue instantiation', function () {
		it('should be able to instantiate a new Queue', function () {
			expect(instance).to.be.an.instanceof(Queue);
		});
	});

	describe('Queue isEmpty', function () {
		it('should be true if the queue is empty', function () {
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;
		});
		it('should be false if the queue is not empty', function () {
			instance.enqueue('foo');
			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.false;
		});
	});

	describe('Queue enqueue', function () {
		it('should insert new items into the queue', function () {

			var isEmpty = instance.isEmpty();
			expect(isEmpty).to.be.true;

			instance.enqueue('foo');
			instance.enqueue('bar');
			instance.enqueue(7);
			instance.enqueue(true);
			instance.enqueue([]);
			instance.enqueue({});
			instance.enqueue(function(){});
			expect(instance.size()).to.equal(7);

		});
	});

	describe('Queue dequeue', function () {
		it('should remove the front item from the queue', function () {

			var isEmpty = instance.isEmpty(),
				removedItem;

			expect(isEmpty).to.be.true;

			instance.enqueue('foo');
			instance.enqueue('bar');
			instance.enqueue(4);
			removedItem = instance.dequeue();
			expect(removedItem).to.equal(4);
			removedItem = instance.dequeue();
			expect(removedItem).to.equal('bar');

			expect(instance.size()).to.equal(1);

		});
	});

});
